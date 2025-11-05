"use client";
import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import { useState, useEffect, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    companyName: "",
    zipCode: "",
    remember: false,
    subscribe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

 
  const [verificationSent, setVerificationSent] = useState(false);
  const [verificationEmail, setVerificationEmail] = useState("");
  const [checkingVerification, setCheckingVerification] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  // automatic polling when verification panel is visible
  useEffect(() => {
    if (!verificationSent || !verificationEmail) return;
    const id = setInterval(async () => {
      try {
        const res = await fetch(
          `${
            process.env.NEXT_PUBLIC_API_URL
          }/api/users/status?email=${encodeURIComponent(verificationEmail)}`
        );
        const data = await res.json().catch(() => null);
        if (data && (data.isVerified === true || data.isVerified === "true")) {
          // verified — finalize on the client
          clearInterval(id);
          alert("✅ Email verified — account created");
          setFormData({
            firstName: "",
            lastName: "",
            companyName: "",
            zipCode: "",
            email: "",
            password: "",
            remember: false,
            subscribe: false,
          });
          setErrors({});
          setVerificationSent(false);
          setVerificationEmail("");
        }
      } catch (err) {
        
      }
    }, 5000);

    return () => clearInterval(id);
  }, [verificationSent, verificationEmail]);

  // clear errors when clicking outside the form
  useEffect(() => {
    const handleDocClick = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setErrors({});
      }
    };

    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

  // simple email regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName || !formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName || !formData.lastName.trim())
      newErrors.lastName = "Last name is required";
    if (!formData.companyName || !formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.zipCode || !formData.zipCode.trim())
      newErrors.zipCode = "Zip code is required";
    if (!formData.email || !formData.email.trim())
      newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password || !formData.password.trim())
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Called when user clicks "I have verified" — asks backend to finalize registration
  const handleCheckVerification = async () => {
    if (!verificationEmail) return;
    setCheckingVerification(true);
    try {
      const res = await fetch(
        `${
          process.env.NEXT_PUBLIC_API_URL
        }/api/users/status?email=${encodeURIComponent(verificationEmail)}`
      );

      let data = null;
      try {
        data = await res.json();
      } catch (err) {}

      const isVerified =
        data && (data.isVerified === true || data.isVerified === "true");
      if (isVerified) {
        alert("✅ Account verified and created");
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          zipCode: "",
          email: "",
          password: "",
          remember: false,
          subscribe: false,
        });
        setErrors({});
        setVerificationSent(false);
        setVerificationEmail("");
      } else {
        alert(
          "❌ " + (data && data.message ? data.message : "Not verified yet")
        );
      }
    } catch (err) {
      console.error("Error checking verification:", err);
      alert("Something went wrong while checking verification.");
    } finally {
      setCheckingVerification(false);
    }
  };

  const handleResendVerification = async () => {
    if (!verificationEmail) return;
    setResendLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/resend-verification`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: verificationEmail }),
        }
      );
      let data = null;
      try {
        data = await res.json();
      } catch (e) {}
      const message =
        (data && (data.message || data.error)) ||
        (res.ok ? "Verification email resent" : "Failed to resend");
      alert((res.ok ? "✅ " : "❌ ") + message);
    } catch (err) {
      console.error("Error resending verification:", err);
      alert("Something went wrong while resending verification.");
    } finally {
      setResendLoading(false);
    }
  };

  // quick boolean: all required fields filled and valid
  const isFormFilled =
    formData.firstName &&
    formData.lastName &&
    formData.companyName &&
    formData.zipCode &&
    emailRegex.test(formData.email) &&
    formData.password &&
    formData.password.length >= 6;

  const handleRegister = async (e) => {
    e.preventDefault();

    // Validate before call
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            companyName: formData.companyName,
            zipCode: formData.zipCode,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      let data = null;
      try {
        data = await res.json();
      } catch (err) {
        /* ignore json parse errors */
      }

      // Build a safe message and avoid showing raw internal errors to users
      const serverMsg = data && (data.message || data.error);
      const message =
        serverMsg || (res.ok ? "Verification email sent" : "Request failed");

      if (res.ok) {
        // show verification UI (we assume backend created user and sent email)
        setVerificationSent(true);
        setVerificationEmail(formData.email);
        setErrors({});
      } else {
        // special-case: backend may have created user but failed to send email
        const lower = String(serverMsg || "").toLowerCase();
        if (
          res.status === 500 &&
          lower.includes("failed to send verification")
        ) {
          setVerificationSent(true);
          setVerificationEmail(formData.email);
          setErrors({});
          // gentle warning, don't show raw stack traces
          alert(
            "⚠️ Account created but failed to send verification email. You can resend the verification email below."
          );
        } else {
          // log details for debugging and show a friendly message to user
          console.error("Registration error details:", {
            status: res.status,
            data,
          });
          alert(serverMsg || "Registration failed. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Connection error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });

    // clear field-specific error when user fixes it
    setErrors((prev) => {
      const copy = { ...prev };
      if (copy[name]) {
        if (name === "email") {
          if (newValue && emailRegex.test(newValue)) delete copy[name];
        } else if (name === "password") {
          if (newValue && newValue.length >= 6) delete copy[name];
        } else {
          if (newValue && String(newValue).trim() !== "") delete copy[name];
        }
      }
      return copy;
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const newErrors = { ...errors };

    if (!value || !value.trim()) {
      newErrors[name] = `${
        name.charAt(0).toUpperCase() +
        name
          .slice(1)
          .replace(/([A-Z])/g, " $1")
          .trim()
      } is required`;
    } else if (name === "email" && !emailRegex.test(value)) {
      newErrors[name] = "Enter a valid email";
    } else if (name === "password" && value.length < 6) {
      newErrors[name] = "Password must be at least 6 characters";
    } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  return (
    <div>
      <TopNavBar />
      <Header />
      <div className="bg-[#E1F3F8] h-[150px]">
        <h1 className="text-5xl font-bold pl-20 pt-15">Create an Account</h1>
      </div>
      <div className="flex justify-center items-center   px-4 py-10">
        <div className="w-full max-w-2xl bg-white rounded-xl  p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create a brand new account
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            * Required fields
          </p>

          {verificationSent ? (
            <div className="bg-white border rounded-md p-6">
              <h3 className="text-xl font-semibold mb-2">Verify your email</h3>
              <p className="text-sm text-gray-700">
                A verification link has been sent to{" "}
                <strong>{verificationEmail}</strong>. Please open that email and
                click the verification link to complete your registration.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                After verifying, click the button below to finish registering.
              </p>

              <div className="flex flex-wrap gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleCheckVerification}
                  disabled={checkingVerification}
                  className="px-4 py-2 bg-black text-white rounded-md"
                >
                  {checkingVerification ? "Checking..." : "I have verified"}
                </button>

                <button
                  type="button"
                  onClick={handleResendVerification}
                  disabled={resendLoading}
                  className="px-4 py-2 border rounded-md"
                >
                  {resendLoading ? "Resending..." : "Resend verification email"}
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setVerificationSent(false);
                    setVerificationEmail("");
                  }}
                  className="px-4 py-2 text-sm text-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleRegister} className="space-y-5">
              {/* First & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[18px] font-medium mb-1">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                  {errors.firstName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[18px] font-medium mb-1">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                  {errors.lastName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Company Name & Zip */}
              <div className="grid grid-cols-1 sm:flex sm:items-end gap-4">
                <div>
                  <label className="block text-[18px] mb-1">
                    Company Name *
                  </label>
                  <input
                    name="companyName"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full sm:w-[400px] border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                  {errors.companyName && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.companyName}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-[18px]  mb-1">Zip Code *</label>
                  <input
                    name="zipCode"
                    type="text"
                    required
                    value={formData.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full sm:w-[190px] border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                  {errors.zipCode && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.zipCode}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-[18px] mb-1">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-[18px]  mb-1">Password *</label>
                <div>
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
                  />
                  {errors.password && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-[55px] -translate-y-1/2 text-gray-600 hover:text-black"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="accent-black"
                  />
                  Remember me
                </label>

                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="accent-black"
                  />
                  I’d like to get useful tips, inspiration, and offers via
                  email.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!isFormFilled || isSubmitting}
                className={`w-full bg-black text-white py-4 text-[18px] rounded-md font-semibold  transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? "Creating..." : "Create Account"}
              </button>

              <p className="text-center text-[18px] mt-4">
                Already have an account?{" "}
                <a
                  href="/loginPage/login"
                  className="text-[rgb(131,44,65,1)] text-[18px]   underline"
                >
                  Log in
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

"use client";
import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import { useState, useEffect, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";


export default function Register() {
  const [formData,setFormData]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    companyName:"",
    zipCode:"",
    remember: false,
    subscribe: false

  })
  const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
    const formRef = useRef(null);

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
    if (!formData.firstName || !formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName || !formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.companyName || !formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.zipCode || !formData.zipCode.trim()) newErrors.zipCode = "Zip code is required";
    if (!formData.email || !formData.email.trim()) newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.password || !formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";

     setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleRegister = async (e) => {
    e.preventDefault();

    // validate before calling API
    if (!validateForm()) return;

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
    
      }

      const message = (data && (data.message || data.error)) ||
        (data ? JSON.stringify(data) : null) ||
        (res.ok ? "Account created" : "Request failed");

      if (res.ok) {
        alert("✅ " + message);
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
      } else {
        alert("❌ " + message);
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("Something went wrong!");
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
    
    // Validate the specific field that lost focus
    if (!value || !value.trim()) {
      newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1').trim()} is required`;
    } else if (name === "email" && !emailRegex.test(value)) {
      newErrors[name] = "Enter a valid email";
    } else if (name === "password" && value.length < 6) {
      newErrors[name] = "Password must be at least 6 characters";
    } else {
      delete newErrors[name];
    }
    
    setErrors(newErrors);
  };

  // form submission is handled by handleRegister

  // quick boolean: all required fields filled and valid
  const isFormFilled =
    formData.firstName &&
    formData.lastName &&
    formData.companyName &&
    formData.zipCode &&
    emailRegex.test(formData.email) &&
    formData.password &&
    formData.password.length >= 6;

  return (
    <div>
      <TopNavBar />
      <Header />
      <div className="bg-[#E1F3F8] h-[150px]">
        <h1 className="text-5xl font-bold pl-20 pt-15">Create an Acount</h1>
      </div>
      <div className="flex justify-center items-center   px-4 py-10">
        <div className="w-full max-w-2xl bg-white rounded-xl  p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create a brand new account
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            * Required fields
          </p>

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
                  <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
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
                  <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Company Name & Zip */}
            <div className="grid grid-cols-1 sm:flex sm:items-end gap-4">
              <div>
                <label className="block text-[18px] mb-1">Company Name *</label>
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
                  <p className="text-red-600 text-sm mt-1">{errors.companyName}</p>
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
                  <p className="text-red-600 text-sm mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-[18px] mb-1">Email Address *</label>
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
                  <p className="text-red-600 text-sm mt-1">{errors.password}</p>
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
                I’d like to get useful tips, inspiration, and offers via email.
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
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

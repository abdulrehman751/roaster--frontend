"use client";
import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import { useEffect, useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleDocClick = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        setErrors({});
      }
    };

    document.addEventListener("mousedown", handleDocClick);
    return () => document.removeEventListener("mousedown", handleDocClick);
  }, []);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validationForm = () => {
    const newErrors = {};
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

  const handlelogin = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validationForm()) {
      return; // Stop if validation fails
    }

    try {
      setIsSubmitting(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      let data = null;
      try {
        data = await res.json();
      } catch (err) {}

      if (res.ok) {
        // Handle successful login
        alert("Successfully logged in!");
        // Add your login success logic here (e.g., redirect, store token, etc.)
        setFormData({
          email: "",
          password: "",
        });
      } else {
        // Handle login error
        const message = data?.message || "Invalid email or password";
        alert(message);
      }
    } catch (error) {
      console.error("Error logging in:", error);
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

  // Removed unused handleSubmit function

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

  const isFormFilled =
    formData.email && formData.password && formData.password.length >= 6;

  return (
    <div>
      <TopNavBar />
      <Header />
      <div className="bg-[#E1F3F8] h-[150px]">
        <h1 className="text-5xl font-bold pl-20 pt-15">Log In</h1>
      </div>
      <div className="flex justify-center items-center  bg-gray-50 px-4 py-10">
        <div className="w-full max-w-xl  rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Log in to your existing account
          </h2>

          <p className="text-center text-gray-400 text-sm mb-4">
            * Required fields
          </p>

          <form ref={formRef} onSubmit={handlelogin} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[18px]  mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="block text-[18px]  mb-1">Password *</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="accent-black"
                />
                Remember me
              </label>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                disabled={!isFormFilled || isSubmitting}
                className="w-full bg-black text-white py-4 rounded-md text-[18px] font-semibold   transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1  disabled:opacity-50 disabled:cursor-not-allowed "
              >
                {isSubmitting ? "log in..." : "Log In"}
              </button>
            </div>

            {/* Links */}
            <div className="flex gap-6 justify-center items-center text-[18px] mt-4">
              <a
                href="/forgetPassword/forget"
                className="text-[rgb(131,44,65,1)] underline"
              >
                Forgot password
              </a>
              <a
                href="/registerPage/register"
                className="text-[rgb(131,44,65,1)] underline"
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

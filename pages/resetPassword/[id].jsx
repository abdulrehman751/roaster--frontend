import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const ResetPassword = () => {
  const router = useRouter();
  const { token } = router.query;
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email:"",
    password: "",
    confirmPassword: "",
  });
  const formRef = useRef(null);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};
   if (!formData.email || !formData.email.trim())
      newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.password || !formData.password.trim())
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword || !formData.confirmPassword.trim())
      newErrors.confirmPassword = "Confirm password is required";
    else if (formData.confirmPassword.length < 6)
      newErrors.confirmPassword = "Password must be at least 6 characters";

    // check match
    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Password do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePassword = async (e) => {
    e.preventDefault();
    // validate
    if (!validateForm()) return;

    
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/reset-password/${token}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }),
    });

    let data = null;
    try { data = await res.json(); } catch (err) { data = { message: await res.text() }; }

    if (res.ok) {
      alert("Password reset successful!");
      setErrors({});
      router.push("/loginPage/login");
    } else {
      console.error('Reset password failed', { status: res.status, data });
      alert(data?.message || "Failed to reset password");
    }
  };
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));

    // Clear field-specific error when the user types
    setErrors(prev => {
      const copy = { ...prev };
      if (copy[name]) {
        if (name === 'password') {
          if (newValue && String(newValue).trim().length >= 6) delete copy[name];
        } else if (name === 'confirmPassword') {
          // clear confirm error if passwords match or confirm length ok
          if (newValue && String(newValue).trim().length >= 6 && (newValue === (formData.password || '') || formData.password === newValue)) delete copy[name];
        } else {
          if (newValue && String(newValue).trim() !== '') delete copy[name];
        }
      }
      return copy;
    });
  };

  return (
    <div>
      <TopNavBar />
      <Header />
      <div className="bg-[#E1F3F8] h-[150px]">
        <h1 className="text-5xl font-bold pl-20 pt-15">Reset password</h1>
      </div>
      <div className="flex justify-center items-center  bg-gray-50 px-4 py-10">
        <div className="w-full max-w-xl  rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Reset Your password
          </h2>

          <p className="text-center text-gray-400 text-sm mb-4">
            * Required fields
          </p>

          <form ref={formRef} onSubmit={handlePassword} className="space-y-5" >
            {/* Email */}
              <div>
              <label className="block text-[18px] font-medium mb-1">
                Email *
              </label>
              <input
                name="email"
                placeholder="Enter Email"
                type="email"
                
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {/*New Password */}
            <div>
              <label className="block text-[18px] font-medium mb-1">
                New Password *
              </label>
              <input
                name="password"
                placeholder="New Password"
                type="password"
                
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {/*Confirm New Password */}
            <div className="relative">
              <label className="block text-[18px]  mb-1">
                Confirm New Password *
              </label>

              <input
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm New Password"
                
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[50px] -translate-y-1/2 text-gray-600 hover:text-black"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Button */}
            <div>
              <button
                type="submit"
                // disabled={!isFormFilled || isSubmitting}
                className="w-full bg-black text-white py-4 rounded-md text-[18px] font-semibold   transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1  disabled:opacity-50 disabled:cursor-not-allowed "
              >
                Reset Password
              </button> 

            </div>
             <p className="text-center text-[18px] mt-4">
                Already have an account?{" "}
                <Link
                  href="/loginPage/login"
                  className="text-[rgb(131,44,65,1)] text-[18px]   underline"
                >
                  Log in
                </Link>
              </p>
          </form>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};
export default ResetPassword;

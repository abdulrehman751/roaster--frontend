"use client";
import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
    // Example:
    // await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {...})
  };

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

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[18px]  mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
              />
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
                  className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1 focus:ring-black focus:outline-none"
                />
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
                className="w-full bg-black text-white py-4 rounded-md text-[18px] font-semibold  transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1"
              >
                Log In
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

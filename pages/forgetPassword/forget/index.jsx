import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

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
            Forgot Password
          </h2>
          <p className="text-center text-[18px] mb-4">
            Enter the email address associated with your account, and we'll send
            you instructions to reset your password.
          </p>

          <p className="text-center text-[18px]  mb-4">
            * Required fields
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[18px] font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1  focus:outline-none"
              />
            </div>

            {/* Login Button */}
            <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-4 rounded-md text-[18px] font-semibold transition-all duration-300 ease-in-out hover:bg-[#8B2232] hover:-translate-y-1"
            >
              Send Help
            </button>
            </div>

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
};

export default ForgotPassword;

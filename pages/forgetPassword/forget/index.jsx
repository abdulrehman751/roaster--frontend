import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import Link from "next/link";
import React, { useState } from "react";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email || !formData.email.trim())
      newErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Enter a valid email";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    
    // Validate form and show errors
    if (!validateForm())
      { 
        return;
      }
    
      return; // Stop here if validation fails
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/forgot-password`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
        }),
      }
    );
    let data = null;
    try {
      data = await res.json();
    } catch (err) {}

    if (res.ok) {
     console.log("sent on msg on your email")
      setErrors({});
      
      setFormData({
        email: "",
      
      });
    } else {
      // Handle login error
      const message = data?.message || "Invalid email or password";
      alert(message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate email format while typing
    if (name === 'email') {
      if (value.trim() !== '') {
        if (!emailRegex.test(value)) {
          setErrors(prev => ({
            ...prev,
            email: 'Enter a valid email'
          }));
        } else {
          setErrors(prev => {
            const copy = { ...prev };
            delete copy.email;
            return copy;
          });
        }
      } else {
        setErrors(prev => {
          const copy = { ...prev };
          delete copy.email;
          return copy;
        });
      }
    }
  };

  return (
    <div>
      <TopNavBar />
      <Header />

      <div className="bg-[#E1F3F8] h-[150px]">
        <h1 className="text-5xl font-bold pl-20 pt-15">Forgot Password</h1>
      </div>
      <div className="flex justify-center items-center  bg-gray-50 px-4 py-10">
        <div className="w-full max-w-xl  rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Forgot Your Password
          </h2>
          <p className="text-center text-[18px] mb-4">
            Enter the email address associated with your account, and we'll send
            you instructions to reset your password.
          </p>

          <p className="text-center text-[18px]  mb-4">* Required fields</p>

          <form onSubmit={handleForgotPassword} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-[18px] font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-3 focus:ring-1  focus:outline-none"
              />
                {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

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

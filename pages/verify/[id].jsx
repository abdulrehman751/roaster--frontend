import FooterComponent from "@/components/common/footer";
import Header from "@/components/common/header";
import TopNavBar from "@/components/common/topNavBar";
import { useRouter } from "next/router";

import React, { useState, useEffect } from "react";

const VerifyPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [verified, setVerified] = useState(false);

  // Auto-verify when the page loads and router is ready
  useEffect(() => {
    if (router.isReady && id && !verified && !loading) {
      handleVerify();
    }
  }, [router.isReady, id]);

  const handleVerify = async () => {
    if (!id) {
      setMessage("❌ Invalid verification link");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/users/verify/${id}`
      );
      
      let data = null;
      try {
        // Try to parse as JSON first
        data = await res.json();
      } catch (e) {
        // If not JSON, get as text
        data = { message: await res.text() };
      }

      console.log("Verification response:", { status: res.status, data });

      if (res.ok) {
        setMessage("✅ Email verified successfully!");
        setVerified(true);
        // Redirect to login page after short delay
        setTimeout(() => {
          router.push("/loginPage/login");
        }, 2000);
      } else {
        // Show server error message if available
        setMessage(`❌ ${data.message || "Invalid or expired verification link"}`);
      }
    } catch (err) {
      console.error("Verification error:", err);
      setMessage("❌ Connection error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <TopNavBar />
      <Header />
      <div className="bg-[#E1F3F8] h-[150px]">
        <h1 className="text-5xl font-bold pl-20 pt-15">Verify Your Email</h1>
      </div>
      <div className="flex justify-center flex-col items-center bg-gray-50 px-4 py-10">
        <div className="w-full max-w-xl rounded-xl p-8 text-center">
          {message ? (
            <>
              <p className={`text-2xl mb-4 ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
                {message}
              </p>
              {message.includes('❌') && (
                <button
                  onClick={handleVerify}
                  disabled={loading}
                  className="mt-4 px-6 py-2 bg-black text-white rounded-md text-[16px] font-semibold transition-all duration-300 ease-in-out hover:bg-[#8B2232] disabled:opacity-60 hover:-translate-y-1"
                >
                  Try Again
                </button>
              )}
            </>
          ) : (
            <>
              <p className="text-2xl mb-6">Verifying your email</p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto">Verifying your email</div>
            </>
          )}
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default VerifyPage;

"use client";

import { Undo2 } from "lucide-react";
import { useState, useEffect } from "react";
import CarImg from "@/assets/car-img.svg";
import LinesImg from "@/assets/linesimg.png";
import RentCarImg from "@/assets/rent-carImg.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const VerifyOtpScreen = () => {
  const [otp, setOtp] = useState("");
  const [resendTimer, setResendTimer] = useState(60);
  const navigate = useNavigate();

  // Countdown for resend OTP
  useEffect(() => {
    const interval = setInterval(() => {
      setResendTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log("VerifyOtpScreen mounted");
  }, []);


  return (
    <div className="relative min-h-screen bg-[#3563E9] flex justify-center items-center">
      <img
        src={LinesImg}
        alt="Background lines"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start justify-center h-full w-full md:px-10 gap-10 overflow-y-auto">

        <div className="w-full md:w-1/3 flex flex-col justify-start space-y-6 text-center md:text-left">
          <h1 className="text-white text-3xl font-semibold">Welcome to</h1>

          <img
            src={RentCarImg}
            alt="Rent Car"
            className="w-40 h-auto mx-auto md:mx-0"
          />

          <p className="text-white text-4xl w-[240px] mx-auto md:mx-0">
            Drive in minutes. Rent smarter.
          </p>

          <p className="text-white w-[260px] md:w-[260px] text-sm leading-relaxed mx-auto md:mx-0">
            Search nearby cars, verify your license securely, and check out with
            your preferred payment method. PKI-ready for enterprise-grade
            security.
          </p>

          <img
            src={CarImg}
            alt="Car Illustration"
            className="w-72 h-auto pt-28 mx-auto md:mx-0"
          />
        </div>


        <div className="w-full md:w-auto flex justify-center">
          <Card className="w-[360px] rounded-2xl p-3 shadow-xl border border-blue-500">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Enter the 6–digit code
              </h2>
              <Button
                variant="outline"
                className="h-8 w-24 flex items-center text-black font-semibold justify-center gap-3 rounded-sm bg-[#D6E4FD] hover:bg-[#D6E4FD] text-sm"
                onClick={() => navigate(-1)}
              >
                Back
                <Undo2 className="h-4 w-4 rounded-md border border-black" />
              </Button>
            </div>

            {/* OTP Input */}
            <p className="text-xs text-gray-400 mb-4">
              sent to your email / mobile.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Enter the 6–digit OTP
              </h2>

              <Input
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="********"
                className="h-15 mt-2 rounded-md bg-gray-100 border-none tracking-widest text-xl"
                maxLength={6}
              />
            </div>

            <Button
              className="w-full mt-4 h-12 rounded-md bg-[#3563E9] hover:bg-[#3563E9] text-white text-lg font-semibold"
              onClick={() => console.log("Verify OTP clicked")}
            >
              Verify OTP
            </Button>

            <div className="text-right mt-2 text-xs text-gray-400">
              Resend available in {resendTimer}s
            </div>

            <p className="text-xs text-gray-400 mt-6 text-center">
              © 2025 CRent Technologies
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtpScreen;

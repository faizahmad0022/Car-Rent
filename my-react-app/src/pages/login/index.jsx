"use client";

import { useState } from "react";
import CarImg from "@/assets/car-img.svg";
import LinesImg from "@/assets/linesimg.png";
import RentCarImg from "@/assets/rent-carImg.png";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Eye, ShieldCheck } from "lucide-react";

const WelcomeScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#3563E9] flex justify-center overflow-hidden">
      {/* Background Lines */}
      <img
        src={LinesImg}
        alt="Background lines"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full min-h-screen w-full  md:px-10  gap-10 overflow-y-auto">
        {/* LEFT SECTION */}
        <div className="w-full md:w-1/3 flex flex-col justify-center space-y-6 text-center md:text-left">
          <h1 className="text-white text-3xl font-semibold">Welcome to</h1>

          <img
            src={RentCarImg}
            alt="Rent Car"
            className="w-40 h-auto mx-auto md:mx-0"
          />

          <p className="text-white text-4xl w-[240px]  mx-auto md:mx-0">
            Drive in minutes. Rent smarter.
          </p>

          <p className="text-white w-[260px] md:w-[260px] text-sm leading-relaxed mx-auto md:mx-0">
            Search nearby cars, verify your license securely, and check out with
            your preferred payment method. PKI-ready for enterprise-grade security.
          </p>

          <img
            src={CarImg}
            alt="Car Illustration"
            className="w-72 h-auto pt-28 mx-auto md:mx-0"
          />
        </div>

        {/* RIGHT SECTION → FORM CARD */}
        <div className="w-full md:w-auto flex justify-center">
          <div className="w-[360px] bg-white rounded-2xl p-6 shadow-xl border border-blue-500 flex-shrink-0">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-gray-900">Login</h2>
            <p className="text-sm text-gray-400 mt-1">
              Use your email or mobile number. PKI supported for enterprise users.
            </p>

            {/* Email */}
            <div className="mt-3 space-y-2">
              <label className="text-sm font-medium text-gray-900">Email</label>
              <Input
                placeholder="Hadi"
                className="h-12 rounded-xl bg-gray-100 border-none"
              />
            </div>

            {/* Password */}
            <div className="mt-3 space-y-2 relative">
              <label className="text-sm font-medium text-gray-900">Password</label>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                className="h-12 rounded-xl bg-gray-100 border-none pr-10"
              />
              <Eye
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-400 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-3 mt-3">
              <Checkbox id="remember" />
              <label htmlFor="remember" className="text-sm font-medium text-gray-900">
                Remember me
              </label>
            </div>

            {/* Sign In */}
            <Button className="w-full mt-3 h-12 rounded-md bg-[#3563E9] hover:bg-[#3563E9] text-white">
              Sign in
            </Button>

            {/* OR */}
            <div className="flex items-center gap-2 my-2">
              <Separator className="flex-1" />
              <span className="text-xs text-gray-400">OR</span>
              <Separator className="flex-1" />
            </div>

            {/* OTP & PKI */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="flex-1 h-11 rounded-xl bg-[#3563E9] text-white hover:text-white hover:bg-[#3563E9]"
              >
                Continue with OTP
              </Button>

              <Button
                variant="outline"
                className="flex-1 flex items-center justify-center gap-2 h-11 text-white hover:text-white rounded-md bg-[#3563E9] hover:bg-[#3563E9]"
              >
                <ShieldCheck className="w-3 h-3 text-white" />
                PKI Login
              </Button>
            </div>

            <Button className="w-full mt-3 h-12 rounded-md bg-gray-600 hover:bg-gray-600 hover:text-white text-white">
              Continue as Guest
            </Button>

            <p className="text-xs text-gray-400 text-center mt-3 leading-5">
              By signing in, you agree to our{" "}
              <span className="underline cursor-pointer">Terms & Privacy</span>.
              <br />© 2025 CRent Technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;

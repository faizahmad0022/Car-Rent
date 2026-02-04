import { useState } from "react";
import { Eye } from "lucide-react";
import CarImg from "@/assets/car-img.svg";
import LinesImg from "@/assets/linesimg.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RentCarImg from "@/assets/rent-carImg.png";
import { Separator } from "@/components/ui/separator";

const SignUpScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#3563E9] flex justify-center overflow-hidden">
      <img
        src={LinesImg}
        alt="Background lines"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full min-h-screen w-full md:px-10 gap-10 overflow-y-auto">
        <div className="w-full md:w-1/3 flex flex-col justify-center space-y-6 text-center md:text-left">
          <h1 className="text-white text-3xl font-semibold">Welcome to</h1>

          <img
            src={RentCarImg}
            alt="Rent Car"
            className="w-40 h-auto mx-auto md:mx-0"
          />

          <p className="text-white text-4xl w-[240px] mx-auto md:mx-0">
            Drive in minutes. Rent smarter.
          </p>

          <p className="text-white w-[260px] text-sm leading-relaxed mx-auto md:mx-0">
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
          <div className="w-[360px] bg-white rounded-2xl p-6 shadow-xl border border-blue-500 flex-shrink-0">
            <h2 className="text-2xl font-semibold text-gray-900">
              Create Account
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Register to book cars quickly and securely.
            </p>

            <div className="mt-3 space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Full Name
              </label>
              <Input
                placeholder="Enter your full name"
                className="h-12 rounded-md bg-gray-100 border-none"
              />
            </div>

            <div className="mt-3 space-y-2">
              <label className="text-sm font-medium text-gray-900">Email</label>
              <Input
                placeholder="Enter your email"
                className="h-12 rounded-md bg-gray-100 border-none"
              />
            </div>

            <div className="mt-3 space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Mobile
              </label>
              <Input
                placeholder="+96 000 000 000 00"
                className="h-12 rounded-md bg-gray-100 border-none"
              />
            </div>

            <div className="mt-3 space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Password
              </label>

              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="**********"
                  className="h-12 rounded-md bg-gray-100 border-none pr-10"
                />

                <Eye
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </div>

            <p className="text-sm text-blue-600 font-semibold mt-2 cursor-pointer">
              Forgot Password
            </p>

            <Button className="w-full mt-3 h-12 rounded-md bg-[#3563E9] hover:bg-[#3563E9] text-white">
              Sign Up
            </Button>

            <div className="flex items-center gap-2 my-2">
              <Separator className="flex-1" />
              <span className="text-xs text-gray-400">OR</span>
              <Separator className="flex-1" />
            </div>

            <p className="text-xs text-gray-400 mt-3 w-5/6 leading-5">
              By signing in, you agree to our{" "}
              <span className="underline cursor-pointer">Terms</span>
              <span className="mx-1">&</span>
              <span className="underline cursor-pointer">Privacy</span>. © 2025
              CRent Technologies
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpScreen;

"use client";

import { useState } from "react";
import CarImg from "@/assets/car-img.svg";
import { Card } from "@/components/ui/card";
import LinesImg from "@/assets/linesimg.png";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RentCarImg from "@/assets/rent-carImg.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { ShieldCheck, Undo2 } from "lucide-react";

const PkiLoginScreen = () => {
  const navigate = useNavigate();
  const [passphrase, setPassphrase] = useState("");
  const [rememberDevice, setRememberDevice] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#3563E9] flex justify-center items-center overflow-hidden">
      <img
        src={LinesImg}
        alt="Background lines"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full w-full md:px-10 gap-10 overflow-y-auto">
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
          <Card className="w-[360px] rounded-2xl p-6 shadow-xl border border-blue-500 flex-shrink-0">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-500" />
                PKI Login
              </h2>
              <Button
                variant="outline"
                className="h-8 w-24 flex items-center text-black font-semibold justify-center gap-3 rounded-sm bg-[#D6E4FD] hover:bg-[#D6E4FD] text-sm"
                onClick={() => navigate(-1)}
              >
                Back
                <Undo2 className="h-4 w-4 rounded-full border border-black p-0.5" />
              </Button>
            </div>

            <p className="text-xs text-gray-400 mb-4">
              Use a trusted digital certificate to sign in securely.
            </p>

            <Button className="w-full h-12 rounded-md bg-[#3563E9] hover:bg-[#3563E9] text-white font-medium mb-4 flex items-center gap-2 px-4 justify-start">
              <ShieldCheck className="w-4 h-4" />
              Use System Certificate
            </Button>

            <p className="text-xs text-gray-400 mb-4">
              Your browser/device will prompt you to choose a certificate from
              the secure keystore after you press Validate.
            </p>

            <Separator className="my-3" />

            <p className="text-sm font-medium text-gray-900 mb-2">
              Upload Certificate
            </p>
            <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 mb-4">
              <svg
                className="w-10 h-10 mb-2 text-white p-2 rounded-full bg-[#3563E9] "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12V4m0 0L8 8m4-4l4 4"
                ></path>
              </svg>
              <span className="text-sm font-semibold text-gray-700">
                Upload Certificate
              </span>
              <span className="text-xs text-gray-400 font-bold">
                Drag and drop here
              </span>
              <Input type="file" className="hidden" />
            </label>

            {/* Passphrase */}
            <div className="mb-3">
              <label className="text-sm font-medium text-gray-900">
                Certificate Passphrase / PIN (if any)
              </label>
              <Input
                placeholder="Enter Passphrase"
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                className="mt-2 h-12 rounded-md bg-gray-100 font-semibold border-none !placeholder-gray-300"
              />
            </div>

            {/* Remember Device */}
            <div className="flex items-center gap-2 mb-4">
              <Checkbox
                id="rememberDevice"
                checked={rememberDevice}
                onCheckedChange={(checked) =>
                  setRememberDevice(Boolean(checked))
                }
              />
              <label htmlFor="rememberDevice" className="text-sm text-gray-900">
                Remember this device for faster sign-in
              </label>
            </div>

            {/* Validate Button */}
            <Button className="w-full h-12 rounded-md bg-[#3563E9] hover:bg-[#3563E9] text-white font-semibold mb-2">
              Validate & Continue
            </Button>

            <p className="text-xs text-gray-400 mt-2">
              Problems with certificates? Get help
              <br />© 2025 CRent Technologies
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PkiLoginScreen;

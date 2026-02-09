"use client";

import { useState, useRef } from "react";
import CarImg from "@/assets/car-img.svg";
import LinesImg from "@/assets/linesimg.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RentCarImg from "@/assets/rent-carImg.png";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { CalendarDays, Upload, Undo2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ContinueAsGuestScreen = () => {
  const dateRef = useRef(null);

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [fullName, setFullName] = useState("");
  const [checked, setChecked] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  // Handle date selection and formatting
  const handleDateChange = (e) => {
    const d = new Date(e.target.value);
    if (!isNaN(d.getTime())) {
      setExpiryDate(`${d.getMonth() + 1}-${d.getDate()}-${d.getFullYear()}`);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#3563E9] flex justify-center overflow-hidden">
      <img
        src={LinesImg}
        alt="Background lines"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center min-h-screen w-full md:px-10 gap-10 overflow-y-auto">
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
            your preferred payment method.
          </p>

          <img
            src={CarImg}
            alt="Car Illustration"
            className="w-72 h-auto pt-60 mx-auto md:mx-0"
          />
        </div>

        {/* CARD */}
        <div className="w-full md:w-auto flex justify-center">
          <Card className="w-[600px] h-full rounded-sm shadow-xl">
            <CardHeader className="px-6 pt-3 pb-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">
                  Complete your details
                </h2>

                <Button
                  variant="outline"
                  className="h-8 w-24 flex items-center text-black font-semibold justify-center gap-3 rounded-sm bg-[#D6E4FD] hover:bg-[#D6E4FD] text-sm"
                  onClick={() => window.history.back()}
                  type="button"
                >
                  Back
                  <Undo2 className="h-4 w-4 rounded-full border border-black p-0.5" />
                </Button>
              </div>

              <p className="text-sm text-gray-400 ">
                to unlock booking and fast checkout.
              </p>
            </CardHeader>

            <CardContent className="px-6 pb-6 space-y-4">
              {/* BASIC INFO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-900">
                    Full Name *
                  </label>
                  <Input
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-2 bg-gray-100 text-gray-400 !border-0 !ring-0 focus:!border-0 focus:!ring-0 placeholder:text-gray-400 "
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-900">
                    Driver's License Number *
                  </label>
                  <Input
                    placeholder="Enter license number"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    className="mt-2 bg-gray-100 text-gray-400 placeholder:text-gray-400 !border-0 !ring-0 focus:!border-0 focus:!ring-0"
                  />
                </div>
              </div>

              {/* EMAIL + DATE */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-900">
                    Email
                  </label>
                  <Input
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 bg-gray-100 text-gray-400 placeholder:text-gray-400 !border-0 !ring-0 focus:!border-0 focus:!ring-0"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-semibold text-gray-900">
                    License Expiry Date *
                  </label>

                  <div className="relative mt-2">
                    {/* Visible input */}
                    <Input
                      type="text"
                      value={expiryDate}
                      placeholder="M-D-YYYY"
                      readOnly
                      className="bg-gray-100 !border-0 !ring-0 focus:!border-0 focus:!ring-0 pr-10 text-gray-400 placeholder:text-gray-400 cursor-pointer"
                    />

                    {/* Hidden date input positioned over the visible input */}
                    <input
                      type="date"
                      ref={dateRef}
                      onChange={handleDateChange}
                      className="absolute left-0 top-0 w-full h-full opacity-0 cursor-pointer z-10"
                    />

                    {/* Calendar icon */}
                    <CalendarDays
                      onClick={() => dateRef.current?.focus()}
                      className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-700 cursor-pointer"
                    />
                  </div>
                </div>
              </div>

              {/* MOBILE + UPLOAD */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-900">
                      Mobile
                    </label>
                    <Input
                      placeholder="+96 0000000000"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="mt-2 bg-gray-100 text-gray-400 placeholder:text-gray-400 !border-0 !ring-0 focus:!border-0 focus:!ring-0"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-semibold text-gray-900">
                      Address (optional)
                    </label>
                    <Textarea
                      placeholder="P.O Box: 1071, P. C: 111 Al Ghubra"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="mt-2 bg-gray-100 text-gray-400 placeholder:text-gray-400 !border-0 !ring-0 focus:!border-0 focus:!ring-0 resize-none"
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-900">
                    Upload License Picture
                  </label>

                  <div className="flex flex-col items-center justify-center h-full rounded-lg p-4 bg-gray-100 cursor-pointer">
                    <Upload className="w-8 h-8 text-white rounded-full p-2 bg-blue-600 mb-2" />
                    <p className="text-sm font-bold text-gray-900">
                      Upload License Picture
                    </p>
                    <p className="text-xs font-semibold text-gray-400">
                      Drag and drop here
                    </p>
                  </div>
                </div>
              </div>

              {/* CHECKBOX */}
              <div className="flex items-start gap-2 bg-gray-100 p-3 rounded-md">
                <Checkbox
                  checked={checked}
                  onCheckedChange={(val) => setChecked(val)}
                />
                <p className="text-sm text-gray-700">
                  I confirm my profile and license details are accurate.
                </p>
              </div>

              <div className="flex justify-center">
                <Button className="w-1/2 mx-auto h-12 bg-blue-600 hover:bg-blue-600 text-white font-semibold">
                  Save & Continue
                </Button>
              </div>

              <p className="text-xs text-center text-gray-400">
                © 2025 CRent Technologies
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContinueAsGuestScreen;

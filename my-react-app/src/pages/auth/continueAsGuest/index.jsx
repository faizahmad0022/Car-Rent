"use client";

import { useState } from "react";
import CarImg from "@/assets/car-img.svg";
import LinesImg from "@/assets/linesimg.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RentCarImg from "@/assets/rent-carImg.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, Upload, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const ContinueAsGuestScreen = () => {
  const [fullName, setFullName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [email, setEmail] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#3563E9] flex justify-center overflow-hidden">
      <img
        src={LinesImg}
        alt="Background lines"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full min-h-screen w-full md:px-10 gap-10 overflow-y-auto">
        {/* Left Content */}
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

        {/* Right Card - Complete Details Form */}
        <div className="w-full md:w-auto flex justify-center">
          <Card className="w-full rounded-2xl shadow-xl">
            <CardHeader className="px-6 pt-6 pb-2">
              <div className="flex items-center justify-between">
                
                <h2 className="text-lg font-semibold text-gray-900">
                  Complete your details
                </h2>
                <button className="text-gray-500 hover:text-gray-700">
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                to unlock booking and fast checkout.
              </p>
            </CardHeader>

            <CardContent className="px-6 pb-6 space-y-4">
              {/* Full Name + License Number */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name *
                  </label>
                  <Input
                    placeholder="Hadi"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="mt-2 bg-gray-100 border-none placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Driver's License Number *
                  </label>
                  <Input
                    placeholder="OMR-03201AFR-9"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
                    className="mt-2 bg-gray-100 border-none placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Email + License Expiry */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <Input
                    placeholder="hadi@crent.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 bg-gray-100 border-none placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col relative">
                  <label className="text-sm font-medium text-gray-700">
                    License Expiry Date *
                  </label>
                  <Input
                    type="date"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="mt-2 bg-gray-100 border-none placeholder-gray-400 pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Mobile + Upload License Picture */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">Mobile</label>
                  <Input
                    placeholder="+96 0000000000"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className="mt-2 bg-gray-100 border-none placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 cursor-pointer">
                  <Upload className="w-8 h-8 text-blue-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    Upload License Picture
                  </p>
                  <p className="text-xs text-gray-400">Drag and drop here</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-gray-700">
                  Address (optional)
                </label>
                <Input
                  placeholder="P.O Box: 1071, P. C: 111 Al Ghubra"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="mt-2 bg-gray-100 border-none placeholder-gray-400"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 mt-2">
                <Checkbox
                  id="confirm"
                  checked={checked}
                  onCheckedChange={val => setChecked(val)}
                />
                <label htmlFor="confirm" className="text-sm text-gray-700">
                  I confirm my profile and license details are accurate. I understand
                  bookings may be cancelled if information is invalid.
                </label>
              </div>

              {/* Info text */}
              <p className="text-xs text-gray-400 mt-2">
                Your documents are encrypted in transit and at rest.
              </p>

              {/* Save Button */}
              <Button className="w-full h-12 mt-2 bg-blue-600 hover:bg-blue-600 text-white font-semibold">
                Save & Continue
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContinueAsGuestScreen;

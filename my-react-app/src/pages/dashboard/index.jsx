"use client";

import { useState } from "react";
import { format, addDays } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import LinesImg from "@/assets/linesimg.png";
import { Button } from "@/components/ui/button";
import CarImgGray from "@/assets/car-img.svg";
import CarImgWhite from "@/assets/CarImgWhite.svg";
import CarLinesImg from "@/assets/circlelinesimg.png";
import { ArrowUpDown, ChevronDown, } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectItem, SelectValue, SelectContent, SelectTrigger } from "@/components/ui/select";
import CrentCard from "../../components/dashboardComponents/CrentCard";

const FieldSelect = ({ label, placeholder, options }) => (
  <div className="relative">
    <p className="text-sm font-semibold text-gray-900">{label}</p>
    <Select>
      <SelectTrigger className="mt-1 h-auto border border-gray-200 rounded px-3 py-2 flex items-center justify-between bg-white shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
        <SelectValue placeholder={<span className="text-gray-400 text-xs">{placeholder}</span>} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

// ===== Date Field Component =====
const DateField = ({ label }) => {
  const [date, setDate] = useState(null);
  const next30Days = Array.from({ length: 30 }, (_, i) => {
    const d = addDays(new Date(), i);
    return { value: d.toISOString(), label: format(d, "PPP") };
  });

  return (
    <div className="relative">
      <p className="text-sm font-semibold text-gray-900">{label}</p>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="mt-1 w-full flex items-center justify-between border border-gray-200 rounded px-3 py-2 bg-white shadow-sm text-left hover:border-blue-500 focus:ring-1 focus:ring-blue-500"
          >
            {date ? <span className="text-gray-900 text-sm">{format(new Date(date), "PPP")}</span> : <span className="text-gray-400 text-xs">Select date</span>}
            <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-2">
          {next30Days.map((d) => (
            <button
              key={d.value}
              onClick={() => setDate(d.value)}
              className="w-full text-left px-3 py-2 rounded hover:bg-blue-50 text-sm text-gray-700"
            >
              {d.label}
            </button>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

// ===== Dashboard Component =====
const DashboardRcentCar = () => {
  const locationOptions = [
    { value: "one", label: "Option One" },
    { value: "two", label: "Option Two" },
    { value: "three", label: "Option Three" },
  ];

  const timeOptions = [
    { value: "morning", label: "Morning" },
    { value: "afternoon", label: "Afternoon" },
    { value: "evening", label: "Evening" },
  ];

  return (
    <div className="bg-gray-50 px-6  py-6">

      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-10">
        <Card className="relative w-full md:max-w-[600px] h-[300px] overflow-hidden border-none rounded-sm p-6 flex flex-col justify-between">
          <img src={CarLinesImg} alt="Circle Lines Background" className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none" />
          <div className="relative z-20 flex flex-col gap-4 max-w-[170px]">
            <h2 className="text-white text-xl leading-[1.2] tracking-tight">The Best Platform for Car Rental</h2>
            <p className="text-white text-xs leading-relaxed font-medium opacity-90 w-[200px]">
              Ease of doing a car rental safely and reliably. Of course at a low price.
            </p>
            <Button className="bg-[#3563E9] hover:bg-[#3563E9] text-white w-fit px-5 py-5 rounded-xs mt-2 text-base">Rental Car</Button>
          </div>
          <div className="absolute bottom-10 right-20 z-10 w-full flex justify-end items-end pointer-events-none">
            <img src={CarImgWhite} alt="White Racing Car" className="w-[70%] md:w-[60%] h-auto object-contain translate-y-4" />
          </div>
        </Card>

        <Card className="relative w-full md:max-w-[600px] h-[300px] bg-[#3563E9] overflow-hidden border-none rounded-sm p-6 flex flex-col justify-between">
          <img src={LinesImg} alt="Decorative Lines" className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none" />
          <div className="relative z-20 flex flex-col gap-4 max-w-[170px]">
            <h2 className="text-white text-xl leading-[1.2] tracking-tight">Easy way to rent a car at a low price</h2>
            <p className="text-white text-xs leading-relaxed font-medium opacity-90 w-[200px]">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <Button className="bg-blue-400 hover:bg-blue-400 text-white w-fit px-5 py-5 rounded-xs mt-2 text-base">Rental Car</Button>
          </div>
          <div className="absolute bottom-10 right-14 z-10 w-full flex justify-end items-end pointer-events-none">
            <img src={CarImgGray} alt="" className="w-[70%] md:w-[60%] h-auto object-contain translate-y-4" />
          </div>
        </Card>
      </div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 mb-10">
        <div className="bg-white rounded-sm shadow-sm px-6 py-5 w-full lg:max-w-[558px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100" />
            <p className="text-sm font-semibold text-gray-900">Pick - Up <span className="font-normal text-gray-500">(Nearby Radius)</span></p>
          </div>
          <div className="grid grid-cols-3 divide-x">
            <div className="pr-4">
              <FieldSelect label="Locations" placeholder="Select your city" options={locationOptions} />
            </div>
            <div className="px-4">
              <DateField label="Date" />
            </div>
            <div className="pl-4">
              <FieldSelect label="Time" placeholder="Select your time" options={timeOptions} />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
          <ArrowUpDown className="text-white w-5 h-5" />
        </div>

        {/* Dropoff */}
        <div className="bg-white rounded-xl shadow-sm px-6 py-5 w-full lg:max-w-[558px]">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-100" />
            <p className="text-sm font-semibold text-gray-900">Drop - Off</p>
          </div>
          <div className="grid grid-cols-3 divide-x">
            <div className="pr-4">
              <FieldSelect label="Locations" placeholder="Select your city" options={locationOptions} />
            </div>
            <div className="px-4">
              <DateField label="Date" />
            </div>
            <div className="pl-4">
              <FieldSelect label="Time" placeholder="Select your time" options={timeOptions} />
            </div>
          </div>
        </div>
      </div>

       <div className="w-full md:ml-6 flex items-center justify-start">
        <h1 className="text-gray-400 p-3 text-sm">Popular Cars</h1>
       </div>
       
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  gap-5 justify-center w-full max-w-[1220px] mx-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <CrentCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default DashboardRcentCar;

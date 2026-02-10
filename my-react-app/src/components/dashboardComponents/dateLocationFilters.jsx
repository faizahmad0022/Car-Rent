"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/components/ui/select";
import { useState } from "react";
import { format, addDays } from "date-fns"; 
import { ArrowUpDown, ChevronDown } from "lucide-react";

const FieldSelect = ({ label, placeholder, options }) => (
  <div className="relative w-full border-none">
    <p className="text-sm font-semibold text-gray-900">{label}</p>
    <Select>
      <SelectTrigger className="mt-1 h-auto border border-gray-200 rounded px-3 py-2 flex items-center justify-between bg-white shadow-sm">
        <SelectValue
          placeholder={
            <span className="text-gray-400 text-xs">{placeholder}</span>
          }
        />
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

const DateField = ({ label }) => {
  const [date, setDate] = useState(null);

  const next30Days = Array.from({ length: 30 }, (_, i) => {
    const d = addDays(new Date(), i);
    return { value: d.toISOString(), label: format(d, "PPP") };
  });

  return (
    <div className="relative w-full border-none ">
      <p className="text-sm font-semibold text-gray-900 ">{label}</p>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="mt-1 w-full flex items-center justify-between border border-gray-200 rounded px-3 py-2.5 bg-white shadow-sm"
          >
            {date ? (
              <span className="text-gray-900 text-sm">
                {format(new Date(date), "PPP")}
              </span>
            ) : (
              <span className="text-gray-400 text-xs">Select date</span>
            )}
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="min-w-50 p-2">
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

const DateLocationFilters = () => {
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
    <div className="flex flex-col xl:flex-row items-center gap-6 mb-10">
      {/* Pick Up */}
      <div className=" bg-white rounded-sm shadow-sm px-6 py-5 w-full">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-blue-600 ring-4 ring-blue-100" />
          <p className="text-sm font-semibold">
            Pick - Up{" "}
            <span className="text-gray-500 font-normal">(Nearby Radius)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x gap-4 ">
          <FieldSelect
            label="Locations"
            placeholder="Select your city"
            options={locationOptions}
          />
          <DateField label="Date" />
          <FieldSelect
            label="Time"
            placeholder="Select your time"
            options={timeOptions}
          />
        </div>
      </div>

      <div className="min-w-14 min-h-14 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
        <ArrowUpDown className="text-white w-5 h-5" />
      </div>

      <div className="bg-white w-full rounded-sm shadow-sm px-6 py-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-3 h-3 rounded-full bg-blue-500 ring-4 ring-blue-100" />
          <p className="text-sm font-semibold">Drop - Off</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x gap-4">
          <FieldSelect
            label="Locations"
            placeholder="Select your city"
            options={locationOptions}
          />
          <DateField label="Date" />
          <FieldSelect
            label="Time"
            placeholder="Select your time"
            options={timeOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default DateLocationFilters;

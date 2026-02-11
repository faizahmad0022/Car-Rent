"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { format } from "date-fns";
import { ChevronDown, Search } from "lucide-react";

const locations = [
  { value: "ruwi", label: "Ruwi" },
  { value: "muscat", label: "Muscat" },
];

const times = [
  { value: "9am", label: "09:00 AM" },
  { value: "12pm", label: "12:00 PM" },
];

const cars = [
  { value: "sedan", label: "Sedan" },
  { value: "suv", label: "SUV" },
];

const SearchFilterBar = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="w-full bg-white rounded-sm px-3 py-2 flex items-center font-inter shadow-sm">
      <FieldWrapper label="Locations">
        <Select>
          <SelectTrigger className="border-none p-0 h-auto shadow-none text-[14px]">
            <SelectValue placeholder="Select your city" />
          </SelectTrigger>
          <SelectContent>
            {locations.map((l) => (
              <SelectItem key={l.value} value={l.value}>
                {l.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldWrapper>

      <Divider />

      {/* Date */}
      <FieldWrapper label="Date">
        <Popover>
          <PopoverTrigger asChild>
            <button className="flex items-center justify-between text-[14px] w-full">
              {date ? format(date, "PPP") : "Select your date"}
              <ChevronDown className="w-4 h-4 text-gray-400 ml-2" />
            </button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-2">
            <button
              onClick={() => setDate(new Date())}
              className="text-sm px-3 py-2 hover:bg-gray-100 rounded w-full text-left"
            >
              Today
            </button>
          </PopoverContent>
        </Popover>
      </FieldWrapper>

      <Divider />

      {/* Time */}
      <FieldWrapper label="Time">
        <Select>
          <SelectTrigger className="border-none p-0 h-auto shadow-none text-[14px]">
            <SelectValue placeholder="Select your time" />
          </SelectTrigger>
          <SelectContent>
            {times.map((t) => (
              <SelectItem key={t.value} value={t.value}>
                {t.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldWrapper>

      <Divider />

      {/* Car */}
      <FieldWrapper label="Car">
        <Select>
          <SelectTrigger className="border-none p-0 h-auto shadow-none text-[14px]">
            <SelectValue placeholder="Select car type" />
          </SelectTrigger>
          <SelectContent>
            {cars.map((c) => (
              <SelectItem key={c.value} value={c.value}>
                {c.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FieldWrapper>

      <Divider />

      <div className="flex-1 pl-3">
        <div className="flex items-center gap-2 border-1 rounded-lg px-4 py-2.5">
          <Search className="w-6 h-6  text-gray-500" />
          <input
            type="text"
            placeholder="Search something here"
            className="w-full bg-transparent outline-none text-[14px] placeholder:text-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

const FieldWrapper = ({ label, children }) => (
  <div className="flex flex-col px-3 min-w-[150px]">
    <span className="text-[11px] text-gray-400 mb-1">{label}</span>
    {children}
  </div>
);

const Divider = () => (
  <div className="h-9 w-px bg-gray-200 mx-1" />
);

export default SearchFilterBar;

"use client";

import CarImg from "@/assets/car-img.svg"; 
import { Heart, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BlueLinesFrame from "@/assets/bluelinesframe.svg";
import { Card, CardContent } from "@/components/ui/card";
import SearchFilterBar from "../../components/ZVCarRcent/filtersDateLocation";

const CarCrentAgency = () => {
  const navigate = useNavigate();

  const handleViewDetail = (redirectTo) => {
    navigate(redirectTo);
  };

  return (
    <div className="p-5 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="relative w-full h-20 rounded-sm overflow-hidden bg-[#3B6AF6] font-inter">
          <img
            src={BlueLinesFrame}
            alt="Background Pattern"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex items-center justify-between h-full px-6">
            <div className="flex items-center gap-4">
              <div className="text-white">
                <p className="font-sans text-2xl">
                  Car-Rental-Nearby Dealers & Shop
                </p>
                <p className="mt-3 text-xs font-sans">
                  Providing cheap car rental services and safe and Comfortable
                  facilities.
                </p>
              </div>
            </div>

            <button className="bg-[#5CA4FF] flex items-center text-white text-[14px] font-medium px-4 py-2 rounded">
              Rental Car
            </button>
          </div>
        </div>

        {/* Search Filter Bar */}
        <div className="mt-3">
          <SearchFilterBar />
        </div>

        {/* Car Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => (
            <Card
              key={idx}
              className="w-full rounded-xl p-5 font-inter relative shadow-md"
            >
              <Heart className="absolute top-5 right-5 w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer" />

              <CardContent className="p-0 flex flex-col">
                <div className="flex flex-col items-start mb-4">
                  <h3 className="text-[16px] font-semibold text-[#1A202C]">
                    ZV Car Rent
                  </h3>
                  <p className="text-[12px] text-[#90A3BF] mt-1">Azaiba</p>
                </div>

                <div className="my-4 flex justify-center">
                  <img
                    src={CarImg}
                    alt="Car Logo"
                    className="w-36 object-contain"
                  />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-yellow-400" />
                  <Star className="w-4 h-4 text-gray-300" />
                  <span className="text-[12px] text-[#90A3BF] ml-2">
                    440+ Reviewer
                  </span>
                </div>

                <Button
                  onClick={() => handleViewDetail("/DetailCrentCar")}
                  className="bg-[#3563E9] w-full text-white text-[14px] font-medium py-2 rounded-xs hover:bg-[#3563E9]"
                >
                  View Detail
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarCrentAgency;

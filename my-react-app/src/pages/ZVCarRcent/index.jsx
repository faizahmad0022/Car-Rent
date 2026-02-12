"use client";

import BrandCar from "@/assets/brandCar.svg";
import { Button } from "@/components/ui/button";
import BlueLinesFrame from "@/assets/bluelinesframe.svg";
import FilterSidebar from "../../components/popularCarsCrent";
import CrentCard from "../../components/dashboardComponents/CrentCard";
import SearchFilterBar from "../../components/ZVCarRcent/filtersDateLocation";



const ZvCarRcent = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-5">
      <div className="w-full max-w-7xl mx-auto px-5">
        <div className="relative w-full h-30 rounded-lg overflow-hidden bg-[#3B6AF6] font-inter">
          <img
            src={BlueLinesFrame}
            alt="Background Pattern"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex items-center justify-between h-full px-6">
            <div className="flex items-center gap-4">
              <div className="w-18 h-18 bg-white rounded-lg flex items-center justify-center">
                <img src={BrandCar} alt="Brand Logo" width={48} height={48} />
              </div>

              <div className="text-white">
                <h2 className="text-[20px] font-semibold leading-6">
                  ZV Car Rent
                </h2>

                <p className="text-[14px] opacity-90 mt-1">
                  Al Wadi Al Kabir, Ruwi
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex gap-0.5 text-yellow-400 text-[14px]">
                    ★ ★ ★ ★ ☆
                  </div>
                  <span className="text-[13px] opacity-90">440+ Reviewer</span>
                </div>
              </div>
            </div>

            {/* Right Button */}
            <button className="bg-[#5CA4FF] flex justify-start items-center text-white text-[14px] font-medium px-4 py-2 rounded-xs">
              Rental Car
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row w-full mt-5">
          <FilterSidebar />
          <div className="flex-1 p-5">
            <SearchFilterBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5 pt-5">
              {Array.from({ length: 15 }).map((_, index) => (
                <CrentCard key={index} />
              ))}
            </div>

            <div className="flex justify-center">
              <Button className="w-36 mt-5 h-10 rounded-xs bg-[#3563E9] hover:bg-[#3563E9] text-white">
                Show More Cars
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZvCarRcent;

"use client";
import BrandCar from "@/assets/brandCar.svg";
import BlueLinesFrame from "@/assets/bluelinesframe.svg";
import FilterSidebar from "../../components/popularCarsCrent";
import CrentCard from "../../components/dashboardComponents/CrentCard";
import SearchFilterBar from "../../components/ZVCarRcent/filtersDateLocation";

const ZvCarRcent = () => {
  return (
    <div className="bg-gray-50 p-5">
      <div className="w-full  mx-auto">
        <div className="relative w-full h-[120px] rounded-lg overflow-hidden bg-[#3B6AF6] font-inter">
          <img
            src={BlueLinesFrame}
            alt="Background Pattern"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="relative z-10 flex items-center justify-between h-full px-6">
            <div className="flex items-center gap-4">
              <div className="w-[72px] h-[72px] bg-white rounded-lg flex items-center justify-center">
                <img src={BrandCar} alt="Brand Logo" width={48} height={48} />
              </div>

              <div className="text-white">
                <h2 className="text-[20px] font-semibold leading-[24px]">
                  ZV Car Rent
                </h2>
                <p className="text-[14px] opacity-90 mt-1">
                  Al Wadi Al Kabir, Ruwi
                </p>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex gap-[2px] text-yellow-400 text-[14px]">
                    ★ ★ ★ ★ ☆
                  </div>
                  <span className="text-[13px] opacity-90">440+ Reviewer</span>
                </div>
              </div>
            </div>

            <button className="bg-[#5CA4FF] flex justify-start items-center text-white text-[14px] font-medium px-4 py-2 rounded-xs">
              Rental Car
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full">
        <FilterSidebar />
        <div className="flex-1 p-5">
          <SearchFilterBar />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pt-5">
            {Array.from({ length: 15 }).map((_, index) => (
              <CrentCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZvCarRcent;

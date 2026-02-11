"use client";

import { Card } from "@/components/ui/card";
import LinesImg from "@/assets/linesimg.png";
import { Button } from "@/components/ui/button";
import CarImgGray from "@/assets/car-img.svg";
import CarImgWhite from "@/assets/CarImgWhite.svg";
import CarLinesImg from "@/assets/circlelinesimg.png";
import CrentCard from "../../components/dashboardComponents/CrentCard";
import DateLocationFilters from "../../components/dashboardComponents/dateLocationFilters";

const DashboardRcentCar = () => {
  return (
    <div className="bg-gray-50 px-4 sm:px-6 xl:px-14 py-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 mb-10">
        <Card className="relative w-full  h-75 overflow-hidden border-none rounded-sm p-6 flex flex-col justify-between">
          <img
            src={CarLinesImg}
            alt="Circle Lines Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0 pointer-events-none"
          />
          <div className="relative z-20 flex flex-col gap-4 max-w-42.5">
            <h2 className="text-white text-xl leading-[1.2] tracking-tight">
              The Best Platform for Car Rental
            </h2>
            <p className="text-white text-xs leading-relaxed font-medium opacity-90 w-50">
              Ease of doing a car rental safely and reliably. Of course at a low
              price.
            </p>
            <Button className="bg-[#3563E9] hover:bg-[#3563E9] text-white w-fit px-5 py-5 rounded-xs mt-2 text-base">
              Rental Car
            </Button>
          </div>
          <div className="absolute bottom-10 right-20 z-10 w-full flex justify-end items-end pointer-events-none">
            <img
              src={CarImgWhite}
              alt="White Racing Car"
              className="w-[70%] md:w-[60%] h-auto object-contain translate-y-4"
            />
          </div>
        </Card>

        <Card className="relative w-full  h-75 bg-[#3563E9] overflow-hidden border-none rounded-sm p-6 flex flex-col justify-between">
          <img
            src={LinesImg}
            alt="Decorative Lines"
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="relative z-20 flex flex-col gap-4 max-w-42.5">
            <h2 className="text-white text-xl leading-[1.2] tracking-tight">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-white text-xs leading-relaxed font-medium opacity-90 w-50">
              Providing cheap car rental services and safe and comfortable
              facilities.
            </p>
            <Button className="bg-blue-400 hover:bg-blue-400 text-white w-fit px-5 py-5 rounded-xs mt-2 text-base">
              Rental Car
            </Button>
          </div>
          <div className="absolute bottom-10 right-14 z-10 w-full flex justify-end items-end pointer-events-none">
            <img
              src={CarImgGray}
              alt=""
              className="w-[70%] md:w-[60%] h-auto object-contain translate-y-4"
            />
          </div>
        </Card>
      </div>

      <DateLocationFilters />

      <h1 className="text-gray-400 text-sm mb-4">Popular Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {Array.from({ length: 5 }).map((_, index) => (
          <CrentCard key={index} />
        ))}
      </div>

      <h1 className="text-gray-400 text-sm mt-5 mb-5">Recommendation Cars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
        {Array.from({ length: 10 }).map((_, index) => (
          <CrentCard key={index} />
        ))}
      </div>
    </div>
  );
};

export default DashboardRcentCar;

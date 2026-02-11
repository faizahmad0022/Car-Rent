"use client";

import { useState } from "react";
import carImg from "@/assets/car-img.svg";
import { Star, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import LinesImg from "@/assets/linesimg.png";
import brandCar from "@/assets/brandCar.svg";
import CarImgGray from "@/assets/car-img.svg";
import { Button } from "@/components/ui/button";
import cartextimg from "@/assets/cartextimg.svg";
import rentCarImg from "@/assets/rent-carImg.png";
import CarImgWhite from "@/assets/CarImgWhite.svg";

const DetailCrentCar = () => {
  const [selectedId, setSelectedId] = useState(1);

  const thumbnails = [
    { id: 1, src: brandCar },
    { id: 2, src: carImg },
    { id: 3, src: CarImgWhite },
    { id: 4, src: cartextimg },
    { id: 5, src: rentCarImg },
  ];

  return (
    <div className="w-full p-14">
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-8">
        <div className="flex flex-col w-full xl:w-[55%]">
          <Card className="relative w-full h-[300px]  bg-[#3563E9] overflow-hidden border-none rounded-sm p-6 flex flex-col justify-between">
            <img
              src={LinesImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            <div className="relative z-20 flex flex-col gap-4 max-w-[200px]">
              <h2 className="text-white text-xl leading-[1.2] tracking-tight">
                Sports car with the best design and acceleration    
              </h2>

              <p className="text-white text-xs leading-relaxed font-medium opacity-90">
                
              </p>

              <Button className="bg-blue-400 hover:bg-blue-400 text-white w-fit px-5 py-5 rounded-xs mt-2 text-base">
                Rental Car
              </Button>
            </div>

            <div className="absolute bottom-6  right-6 md:right-30 lg:right-30 xl:right-40 z-10 w-full flex justify-end items-end pointer-events-none">
              <img
                src={CarImgGray}
                alt=""
                className="w-[70%] md:w-[60%] h-auto object-contain translate-y-4"
              />
            </div>
          </Card>

          {/* THUMBNAILS */}
          <div className="flex gap-4 p-5 overflow-x-auto scrollbar-hide">
            {thumbnails.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedId(img.id)}
                className={`flex-shrink-0 cursor-pointer rounded-[14px] transition-all
                  ${
                    selectedId === img.id
                      ? "p-[6px] ring-2 ring-[#3563E9] ring-offset-2"
                      : "p-[6px] border-2 border-transparent hover:border-gray-200"
                  }`}
              >
                <div className="w-24 h-20 md:w-28 md:h-24 bg-white rounded-[10px] overflow-hidden flex items-center justify-center">
                  <img
                    src={img.src}
                    alt=""
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full xl:w-[45%]">
          <Card className="w-full p-6 bg-white border-none rounded-md flex flex-col justify-between shadow-sm h-full">
            <div>
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-[#1A202C]">
                    Nissan GT – R
                  </h1>

                  <div className="flex items-center gap-1 mt-2">
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                      <Star size={16} className="text-gray-300" />
                    </div>

                    <span className="text-sm text-[#596780] font-medium ml-2">
                      440+ Reviewer
                    </span>
                  </div>
                </div>

                <Heart
                  className="text-red-500 fill-red-500 cursor-pointer"
                  size={24}
                />
              </div>

              <p className="text-[#596780] text-lg leading-relaxed mt-8">
                NISMO has become the embodiment of Nissan's outstanding
                performance, inspired by the most unforgiving proving ground, the
                "race track".
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mt-8">
                {[
                  ["Type Car", "Sport"],
                  ["Capacity", "2 Person"],
                  ["Steering", "Manual"],
                  ["Gasoline", "70L"],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between text-lg">
                    <span className="text-[#90A3BF]">{label}</span>
                    <span className="font-semibold text-[#596780]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-12">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-[#1A202C]">
                    $80.00/
                  </span>
                  <span className="text-sm text-[#90A3BF]">days</span>
                </div>

                <span className="text-[#90A3BF] line-through text-base">
                  $100.00
                </span>
              </div>

              <Button className="bg-[#3563E9] hover:bg-[#274bc7] text-white px-8 py-6 rounded-xs text-lg font-semibold w-full sm:w-auto">
                Book Now
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailCrentCar;

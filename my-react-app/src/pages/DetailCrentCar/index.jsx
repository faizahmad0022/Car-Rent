"use client";

import { useState } from "react";
import carImg from "@/assets/car-img.svg";
import { Star, Heart } from "lucide-react";
import LinesImg from "@/assets/linesimg.png";
import brandCar from "@/assets/brandCar.svg";
import CarImgGray from "@/assets/car-img.svg";
import { Button } from "@/components/ui/button";
import cartextimg from "@/assets/cartextimg.svg";
import rentCarImg from "@/assets/rent-carImg.png";
import CarImgWhite from "@/assets/CarImgWhite.svg";
import { Card, CardContent } from "@/components/ui/card";
import CrentCard from "../../components/dashboardComponents/CrentCard";


const reviews = [
  {
    id: 1,
    name: "Alex Stanton",
    role: "CEO at Bukalapak",
    date: "21 July 2022",
    avatar: "https://i.pravatar.cc/100?img=12",
    review:
      "We are very happy with the service from the MORENT app. Morent has low prices and a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
  {
    id: 2,
    name: "Skylar Dias",
    role: "CEO at Amazon",
    date: "20 July 2022",
    avatar: "https://i.pravatar.cc/100?img=32",
    review:
      "We are greatly helped by the services of the MORENT application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
  },
];

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
    <div className="w-full p-14 space-y-14 bg-gray-50">
      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex flex-col w-full xl:w-[55%]">
          <Card className="relative w-full h-75 bg-[#3563E9] overflow-hidden border-none rounded-sm p-6 flex flex-col justify-between">
            <img
              src={LinesImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            <div className="relative z-20 flex flex-col gap-4 max-w-55">
              <h2 className="text-white text-xl leading-[1.2] tracking-tight">
                Sports car with the best design and acceleration
              </h2>

            <p className="text-white text-xs leading-relaxed font-medium opacity-90 w-50">
              Safety and comfort while driving a futuristic and elegant car
            </p>
            </div>

            <div className="absolute bottom-3 lg:bottom-15 md:bottom-15 right-10 md:right-30 lg: z-10 w-full flex justify-end pointer-events-none">
              <img
                src={CarImgGray}
                alt=""
                className="w-[60%] object-contain translate-y-4"
              />
            </div>
          </Card>

          <div className="flex gap-4 p-5 overflow-x-auto">
            {thumbnails.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedId(img.id)}
                className={`shrink-0 cursor-pointer rounded-[14px] transition-all ${
                  selectedId === img.id
                    ? "p-1.5 ring-2 ring-[#3563E9] ring-offset-2"
                    : "p-1.5 border-2 border-transparent hover:border-gray-200"
                }`}
              >
                <div className="w-24 h-20 bg-white rounded-[10px] overflow-hidden flex items-center justify-center">
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
          <Card className="w-full p-6 bg-white border-none rounded-md shadow-sm h-full">
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

              <div className="grid grid-cols-2 gap-y-4 gap-x-8 mt-8">
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

            <div className="flex justify-between items-center mt-12">
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

              <Button className="bg-[#3563E9] hover:bg-[#274bc7] text-white px-9 py-6 rounded-xs text-sm font-semibold">
                Book Now
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* ================= REVIEWS SECTION ================= */}
      <section className="w-full bg-white p-5 rounded-md ">
        <div className=" mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-lg font-semibold text-gray-900">Reviews</h2>
            <span className="bg-blue-500 text-white text-xs font-medium px-2 py-0.5 rounded-md">
              13
            </span>
          </div>

          <div className="space-y-8">
            {reviews.map((item) => (
              <Card
                key={item.id}
                className="border-none shadow-none bg-transparent"
              >
                <CardContent className="p-0">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-4">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />

                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {item.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs text-gray-400">
                        {item.date}
                      </span>

                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-3xl">
                    {item.review}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-end mt-6">
            <button className="text-sm text-gray-500 hover:text-gray-700 font-medium">
              Show All
            </button>
          </div>
        </div>
      </section>

      <div className="flex justify-between items-center">
        <h1 className="text-gray-400 text-sm">Recent Cars</h1>
        <p className="text-blue-500 font-semibold">View All</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <CrentCard key={index} />
            ))}
          </div>
    </div>
  );
};

export default DetailCrentCar;

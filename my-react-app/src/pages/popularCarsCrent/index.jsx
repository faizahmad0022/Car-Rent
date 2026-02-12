"use client";

import FilterSidebar from "@/components/popularCarsCrent";
import CrentCard from "@/components/dashboardComponents/CrentCard";
import { Button } from "@/components/ui/button";
import DateLocationFilters from "@/components/dashboardComponents/dateLocationFilters";

const PopularCarsCrent = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-5">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row w-full">
          <FilterSidebar />
          <div className="flex-1 p-5">
            <DateLocationFilters />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
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

export default PopularCarsCrent;

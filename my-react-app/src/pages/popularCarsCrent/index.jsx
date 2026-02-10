"use client";

import FilterSidebar from "@/components/popularCarsCrent";
import CrentCard from "@/components/dashboardComponents/CrentCard";
import DateLocationFilters from "@/components/dashboardComponents/dateLocationFilters";

const PopularCarsCrent = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex flex-col md:flex-row w-full">
        <FilterSidebar />
        <div className="flex-1 p-5">
          <DateLocationFilters />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5">
            {Array.from({ length: 15 }).map((_, index) => (
              <CrentCard key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCarsCrent;

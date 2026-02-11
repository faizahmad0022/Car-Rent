"use client";

const FilterSidebar = () => {
  return (
    <aside
      className="w-full md:w-65 bg-white px-6 py-6 font-inter text-[#596780] md:min-h-screen">
      {/* TYPE */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase text-[#90A3BF] mb-4">
          Type
        </p>

        {[
          ["Sport", 10, true],
          ["SUV", 12, true],
          ["MPV", 16, false],
          ["Sedan", 20, false],
          ["Coupe", 14, false],
          ["Hatchback", 14, false],
        ].map(([label, count, checked], i) => (
          <label
            key={i}
            className="flex items-center gap-3 mb-3 cursor-pointer"
          >
            <input
              type="checkbox"
              defaultChecked={checked}
              className="w-4 h-4 accent-[#3563E9]"
            />
            <span className="text-sm">
              {label} <span className="text-[#90A3BF]">({count})</span>
            </span>
          </label>
        ))}
      </div>

      {/* CAPACITY */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase text-[#90A3BF] mb-4">
          Capacity
        </p>

        {[
          ["2 Person", 10, true],
          ["4 Person", 14, false],
          ["6 Person", 12, false],
          ["8 or More", 16, false],
        ].map(([label, count, checked], i) => (
          <label
            key={i}
            className="flex items-center gap-3 mb-3 cursor-pointer"
          >
            <input
              type="checkbox"
              defaultChecked={checked}
              className="w-4 h-4 accent-[#3563E9]"
            />
            <span className="text-sm">
              {label} <span className="text-[#90A3BF]">({count})</span>
            </span>
          </label>
        ))}
      </div>

      {/* PRICE */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase text-[#90A3BF] mb-4">
          Price
        </p>

        <input
          type="range"
          min="0"
          max="100"
          defaultValue="80"
          className="w-full h-1.5 rounded-full appearance-none"
          style={{
            background: "linear-gradient(to right, #3563E9 80%, #E0E9F4 80%)",
          }}
          onChange={(e) => {
            const value = e.target.value;
            e.target.style.background = `linear-gradient(to right, #3563E9 ${value}%, #E0E9F4 ${value}%)`;
          }}
        />

        <p className="text-sm mt-3">Max. $100.00</p>
      </div>

      {/* TRANSMISSION */}
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase text-[#90A3BF] mb-4">
          Transmission
        </p>

        {[
          ["Manual", true],
          ["Auto", false],
          ["Hybrid", false],
          ["EV", true],
        ].map(([label, checked], i) => (
          <label
            key={i}
            className="flex items-center gap-3 mb-3 cursor-pointer"
          >
            <input
              type="checkbox"
              defaultChecked={checked}
              className="w-4 h-4 accent-[#3563E9]"
            />
            <span className="text-sm">{label}</span>
          </label>
        ))}
      </div>

      {/* FUEL */}
      <div>
        <p className="text-xs font-semibold uppercase text-[#90A3BF] mb-4">
          Fuel
        </p>

        <input
          type="range"
          min="0"
          max="1000"
          defaultValue="500"
          className="w-full h-1.5 rounded-full appearance-none"
          style={{
            background: "linear-gradient(to right, #3563E9 50%, #E0E9F4 50%)",
          }}
          onChange={(e) => {
            const value = (e.target.value / 1000) * 100;
            e.target.style.background = `linear-gradient(to right, #3563E9 ${value}%, #E0E9F4 ${value}%)`;
          }}
        />

        <p className="text-sm mt-3">500 KM / Tank</p>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          background: #3563e9;
          border-radius: 50%;
          cursor: pointer;
        }
      `}</style>
    </aside>
  );
};

export default FilterSidebar;

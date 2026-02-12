"use client";
import CarVector from "@/assets/carVector.png";
import RentTextImg from "@/assets/rentTextImg.png";

const BookingConfirmComponent = () => {

    const bookingData = {
    name: "Zaid Jawad",
    location: "Muscat of Oman",
    address: "Level 15, South Tower, Emirates Financial Tower, DIFC, Dubai",
    mobile: "055 45 67 890",
    email: "zaid@gmail.com",
    date: "26",
    month: "February",
    time: "8:30 PM",
    ref: "BRK-458921",
    amount: "$90 Paid",
  };


    return (
        <div className="max-w-2xl mx-auto bg-white shadow-lg overflow-hidden font-sans border border-gray-100">
        <div className="p-8 pb-12">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="space-y-6">
              {/* Title with Checkmark */}
              <div className="flex items-center gap-3">
                <div className="bg-[#79c42d] rounded-full p-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">
                  Booking Confirmation
                </h1>
              </div>

              <p className="text-xl text-gray-700">
                {bookingData.name} your booking has been confirm
              </p>

              <div className="mt-4">
                <h2 className="font-semibold text-gray-700">{bookingData.location}</h2>
                <p className="text-sm text-gray-500 max-w-75 leading-tight">
                  {bookingData.address}
                </p>
              </div>

              <div className="mt-6 text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Mobile:</span>{" "}
                  {bookingData.mobile}
                </p>
                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  {bookingData.email}
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="border-[1.5px] border-[#c0e695] rounded-xl p-4 text-center w-32">
                <span className="block text-4xl font-bold text-[#79c42d]">
                  {bookingData.date}
                </span>
                <span className="block text-lg text-[#79c42d] leading-none">
                  {bookingData.month}
                </span>
                <span className="block text-[10px] text-[#79c42d] mt-1 mb-2 font-semibold">
                  {bookingData.time}
                </span>

                <div className="border-t border-[#c0e695] pt-2">
                  <p className="text-[8px] text-[#79c42d] uppercase tracking-tighter">
                    Booking Reference :
                  </p>
                  <p className="text-[10px] text-[#79c42d] font-bold">
                    {bookingData.ref}
                  </p>
                </div>
              </div>
              <div className="mt-4 text-2xl font-bold text-[#79c42d]">
                {bookingData.amount}
              </div>
            </div>
          </div>
        </div>

        <div className="h-24 flex items-center px-10 gap-4 bg-[#9CD323]">
          <img src={CarVector} alt="CarVector" className="h-5 " />
          <img src={RentTextImg} alt="RentTextImg" className="h-7" />
        </div>
      </div>
    )
}


export default BookingConfirmComponent;
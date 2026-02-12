// // 


// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Heart, Fuel, Users, Settings } from "lucide-react";
// import CarImg from "@/assets/car-img.svg";
// import { useNavigate } from "react-router-dom";

// const CrentCard = () => {
//   const navigate = useNavigate();

//   const handleRentNow = () => {
//     navigate("/DetailCrentCar"); 
//   };

//   return (
//     <Card className="w-full rounded-xl p-5 font-inter relative">
//       <Heart className="absolute top-5 right-5 w-5 h-5 text-red-500 fill-red-500" />
//       <CardContent className="p-0">
//         <div>
//           <h3 className="text-[16px] font-semibold text-[#1A202C]">
//             Rolls – Royce
//           </h3>
//           <p className="text-[12px] text-[#90A3BF] mt-1">Sedan</p>
//         </div>

//         <div className="my-6 flex justify-center">
//           <img src={CarImg} alt="Car" className="w-55 object-contain" />
//         </div>

//         <div className="flex items-center justify-between text-[#90A3BF] text-[12px] mb-5">
//           <div className="flex items-center gap-1">
//             <Fuel className="w-4 h-4" />
//             <span>70L</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Settings className="w-4 h-4" />
//             <span>Manual</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <Users className="w-4 h-4" />
//             <span>4 People</span>
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div>
//             <span className="text-[18px] font-bold text-[#1A202C]">$96.00</span>
//             <span className="text-[12px] text-[#90A3BF]"> / day</span>
//           </div>

//           <Button
//             onClick={handleRentNow}
//             className="bg-[#3563E9] text-white text-[14px] font-medium px-5 py-2 rounded-xs hover:bg-[#2B55D6]"
//           >
//             Rent Now
//           </Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default CrentCard;


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Fuel, Users, Settings } from "lucide-react";
import CarImg from "@/assets/car-img.svg";
import { useNavigate } from "react-router-dom";

const CrentCard = ({ redirectTo = "/DetailCrentCar" }) => {
  const navigate = useNavigate();

  const handleRentNow = () => {
    navigate(redirectTo); // navigate dynamically based on prop
  };

  return (
    <Card className="w-full rounded-xl p-5 font-inter relative">
      <Heart className="absolute top-5 right-5 w-5 h-5 text-red-500 fill-red-500" />
      <CardContent className="p-0">
        <div>
          <h3 className="text-[16px] font-semibold text-[#1A202C]">
            Rolls – Royce
          </h3>
          <p className="text-[12px] text-[#90A3BF] mt-1">Sedan</p>
        </div>

        <div className="my-6 flex justify-center">
          <img src={CarImg} alt="Car" className="w-55 object-contain" />
        </div>

        <div className="flex items-center justify-between text-[#90A3BF] text-[12px] mb-5">
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>70L</span>
          </div>
          <div className="flex items-center gap-1">
            <Settings className="w-4 h-4" />
            <span>Manual</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>4 People</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-[18px] font-bold text-[#1A202C]">$96.00</span>
            <span className="text-[12px] text-[#90A3BF]"> / day</span>
          </div>

          <Button
            onClick={handleRentNow}
            className="bg-[#3563E9] text-white text-[14px] font-medium px-5 py-2 rounded-xs hover:bg-[#2B55D6]"
          >
            Rent Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CrentCard;

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import CarTextImg from "@/assets/cartextimg.svg";
import { Search, Heart, Bell, Settings2 } from "lucide-react";


const TopNavbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
        <img src={CarTextImg} alt="Crent Logo" height={28} />
      </div>

      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          
          <Input
            placeholder="Search something here"
            className="h-10 pl-11 pr-10 rounded-full border-gray-200 text-sm placeholder:text-gray-400 focus-visible:ring-0"
          />

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
          >
            <Settings2 className="h-4 w-4 text-gray-500" />
          </Button>
        </div>
      </div>
      </div>
      

      <div className="flex items-center gap-4">

        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full border-gray-200"
        >
          <Heart className="h-4 w-4 text-gray-600" />
        </Button>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9 rounded-full border-gray-200"
          >
            <Bell className="h-4 w-4 text-gray-600" />
          </Button>
          <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full" />
        </div>

        <Button
          variant="outline"
          size="icon"
          className="h-9 w-9 rounded-full border-gray-200"
        >
          <Settings2 className="h-4 w-4 text-gray-600" />
        </Button>

        <Avatar className="h-9 w-9 border border-gray-200 bg-blue-500">
          <AvatarFallback className="text-white">FA</AvatarFallback>
        </Avatar>

      </div>
    </header>
  );
};

export default TopNavbar;

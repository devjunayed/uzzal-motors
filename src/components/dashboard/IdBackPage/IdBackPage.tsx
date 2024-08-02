import WaveOne from "@/components/Background/WaveOne";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const IdBackPage = () => {
  return (
    <div className="h-[317px] relative text-black w-[196px] bg-white border-[1px] text-xs border-black border-dashed rounded-md">
      {/* Content */}
      <div className="p-4  border-t-8">
        <div className="flex justify-center">
          <RxAvatar className="size-24" />
        </div>
        {/* User Inforamtion */}
        <div className="mt-4">
         
        </div>
      </div>
      {/* Svg image */}
      <div className="absolute bottom-0 w-full left-0">
        <WaveOne />
      </div>
    </div>
  );
};

export default IdBackPage;

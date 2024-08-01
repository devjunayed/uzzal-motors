import WaveOne from "@/components/Background/WaveOne";
import React from "react";
import { RxAvatar } from "react-icons/rx";

const IdFrontPage = ({id, name, address, phone}) => {
  return (
    <div className="h-[317px] relative text-black w-[196px] bg-white border-[1px] text-xs border-black border-dotted rounded-md">
      {/* Content */}
      <div className="p-4 mt-4">
        <div className="flex justify-center">
          <RxAvatar className="size-24" />
        </div>
        {/* User Inforamtion */}
        <div className="mt-4">
          <div>ID: {id}</div>
          <div>Name: {name}</div>
          <div>Address: {`${address.street},`}</div>
          <div>Phone: {`${address.street},`}</div>
        </div>
      </div>
      {/* Svg image */}
      <div className="absolute bottom-0 w-full left-0">
        <WaveOne />
      </div>
    </div>
  );
};

export default IdFrontPage;

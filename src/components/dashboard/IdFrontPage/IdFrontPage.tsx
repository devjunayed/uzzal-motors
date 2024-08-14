import WaveOne from "../../background/WaveOne";
import React from "react";
import { RxAvatar } from "react-icons/rx";


interface IdFrontPageProps {
  id: string;
  name: string;
  address: {
    street: string;
  };
  phone: string;
}

const IdFrontPage = ({id, name, address, phone}: IdFrontPageProps) => {
  return (
    <div className="h-[317px] relative text-black w-[196px] bg-white border-[1px] text-xs border-black border-dashed rounded-md">
      {/* Content */}
      <div className="p-4 mt-4">
        <div className="flex justify-center">
          <RxAvatar className="size-24" />
        </div>
        {/* User Inforamtion */}
        <div className="mt-4">
          <div>ID: {id}</div>
          <div>Name: {name}</div>
          <div>Address: {`${address?.street},`}</div>
          <div>Phone: {`${phone}`}</div>
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

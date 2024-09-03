import { Avatar } from "antd";
import WaveOne from "../../background/WaveOne";
import React from "react";
import { RxAvatar } from "react-icons/rx";


interface IdFrontPageProps {
  id: string;
  imgUrl: string;
  name: string;
  address: {
    village: string;
    upazila: string;
    district: string;
  };
  phone: string;
}

const IdFrontPage = ({id, imgUrl, name, address, phone}: IdFrontPageProps) => {
  return (
    <div className="h-[317px] relative text-black w-[196px] bg-white border-[1px] text-xs border-black border-dashed rounded-md">
      {/* Content */}
      <div className="p-4 mt-4">
        <div className="flex justify-center">
          <img src={`http://localhost:5000${imgUrl}`} alt="" className="rounded-full size-28" />
  
        </div>
        {/* User Inforamtion */}
        <div className="mt-4">
          <div>ID: {id}</div>
          <div>Name: {name}</div>
          <div>Address: {`${address.village}, ${address.upazila}, ${address.district}`}</div>
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

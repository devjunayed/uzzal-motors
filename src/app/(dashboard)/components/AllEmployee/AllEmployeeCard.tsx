import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

interface AllEmployeeCardProps {
  _id: string;
  id: string;
  imgUrl: string;
  name: string;
  designation: string;
  address: {
    village: string;
    upazila: string;
    district: string;
  };
  phone: string;
}

const AllEmployeeCard = ({ data }: { data: AllEmployeeCardProps }) => {
  const pathname = usePathname();
  const [menuStatus, setMenuStatus] = useState(false);

  const handleMenu = () => {
    setMenuStatus(!menuStatus);
  };

  return (
    <div className="shadow  ">
      <div className="flex justify-end shadow-sm p-2 relative">
        <MoreOutlined onClick={handleMenu} />
        <div
          className={`${
            menuStatus ? "block" : "hidden"
          } absolute right-0 top-0`}
        >
          <ul className="bg-white shadow-xl p-2">
            <li onClick={handleMenu} className="px-4 py-2 hover:bg-gray-200">
              <Link href={`${pathname}/${data?._id}`}>
                <EyeOutlined /> View
              </Link>{" "}
            </li>
            <li onClick={handleMenu} className="px-4 py-2 hover:bg-gray-200">
              <Link href="/edit">
                <EditOutlined /> Edit
              </Link>
            </li>
            <li onClick={handleMenu} className="px-4 py-2 hover:bg-gray-200">
              <Link href="/delete">
                <DeleteOutlined /> Delete
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={`http://localhost:5000${data?.imgUrl}`}
          className="max-w-sm rounded-lg shadow-2xl size-32"
        />
        <div>
          <h1 className="text-2xl font-bold">{data?.name}</h1>
          <p className="font-light">{data?.id}</p>
          <p className="py-2 font-semibold">{data?.designation}</p>
        </div>
      </div>
    </div>
    // <div className="h-[317px] relative text-black w-[196px] bg-white border-[1px] text-xs border-black border-dashed rounded-md">
    //   {/* Content */}
    //   <div className="p-4 mt-4">
    //     <div className="flex justify-center">
    //       <img src={`http://localhost:5000${imgUrl}`} alt="" className="rounded-full size-28" />

    //     </div>
    //     {/* User Inforamtion */}
    //     <div className="mt-4">
    //       <div>ID: {id}</div>
    //       <div>Name: {name}</div>
    //       <div>Address: {`${address.village}, ${address.upazila}, ${address.district}`}</div>
    //       <div>Phone: {`${phone}`}</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllEmployeeCard;

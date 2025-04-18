"use client";
import { useRef } from "react";
import { MdPrint } from "react-icons/md";
import { useReactToPrint } from "react-to-print";
import IdFrontPage from "../IdFrontPage/IdFrontPage";
import IdBackPage from "../IdBackPage/IdBackPage";

interface PrintIdCardProps {
  id: string;
  name: string;
  address: {
    street: string;
  };
  phone: string;
}
export default function PrintIdCard({
  id,
  name,
  address,
  phone,
}: PrintIdCardProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const handlePrint = useReactToPrint({
    content: () => contentRef.current,
  });
  return (
    <div>
      <div className=" flex justify-center items-center w-full">
        <button
          className="bg-um-primary flex items-center p-2 gap-2 text-black mt-4 rounded-lg"
          onClick={handlePrint}
        >
          <MdPrint className="text-white" />
          Print Card
        </button>
      </div>
      <div ref={contentRef}>
        <div className="min-h-screen w-full flex items-center justify-center gap-2 ">
          {/* Front page of id */}
          <IdFrontPage name={name} id={id} address={address} phone={phone} />

          {/* Back page of id */}
          <IdBackPage />
        </div>
      </div>
    </div>
  );
}

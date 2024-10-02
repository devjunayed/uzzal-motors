"use client";

import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef } from "react";
import Maintenance from "@/components/ui/MaintenenceMode/Maintenance";

interface TopProjectCardProps {
  i: number;
  title: string;
  description: string;
  src: string;
  link: string;
  color: string;
  progress: any;
  range: any;
  targetScale: number;
}

const TopProjectCard = ({
  i,
  title,
  description,
  src,
  link,
  color,
  progress,
  range,
  targetScale,
}: TopProjectCardProps) => {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-24 min-h-[50vh] flex items-center justify-center w-full"
    >
      <motion.div
        className="flex flex-col relative h-[500px] origin-top w-full  rounded-lg p-8"
        style={{
          background: `linear-gradient(115deg, #FF0000, #000000)`,
          scale,
          top: `calc(5vh + ${i * 25}px)`,
        }}
      >
        {/* <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <p className="text-lg">{description}</p>
            <span className="block mt-4">
              <a href={link} target="_blank" className="flex items-center space-x-2 text-black">
                <span>See more</span>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="black"
                  />
                </svg>
              </a>
            </span>
          </div>
          <div className="flex-1">
            <motion.div className="relative w-full h-64 overflow-hidden" style={{ scale }}>
              <Image
                src={`/images/${src}`}
                fill
                alt="image"
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div> */}
        <Maintenance />
      </motion.div>
    </div>
  );
};

export default TopProjectCard;

"use client"
import Count, { useCountUp } from "react-countup";

const CountUp = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div className="flex justify-center text-black mb-24">
      <div className="bg-cyan-100 flex justify-evenly py-10 w-full lg:w-9/12 rounded-lg">
        <div className="text-center">
          <div className="flex font-lobster gap-1 items-center justify-center text-xl lg:text-3xl">
            <Count enableScrollSpy end={60} /> +
          </div>
          <div className="text-lg lg:text-xl font-serif">Employees</div>
        </div>
        <div className="text-center">
          <div className="flex font-lobster gap-1 items-center justify-center text-xl lg:text-3xl">
            <Count enableScrollSpy end={35} /> +
          </div>
          <div className="text-lg lg:text-xl font-serif">Machineries</div>
        </div>
        <div className="text-center">
          <div className="flex font-lobster gap-1 items-center justify-center text-xl lg:text-3xl">
            <Count enableScrollSpy end={1000} /> +
          </div>
          <div className="text-lg lg:text-xl font-serif">Projects</div>
        </div>
       
      </div>
    </div>
  );
};

export default CountUp;

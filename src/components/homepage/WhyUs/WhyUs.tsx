import { TiInputCheckedOutline } from "react-icons/ti";

const WhyUs = () => {
  return (
    <div className="hero text-black min-h-screen">
      <div className="hero-content flex-col gap-14 lg:flex-row ">
        <img src="/images/why-us.jpg" className="lg:max-w-xl rounded-lg " />
        <div>
          <h2 className="text-xl font-bold font-serif mb-4">Why choose us? </h2>
          <div>
            <h4 className="py-2 font-serif flex gap-2 items-center">
             <span className="text-3xl"> <TiInputCheckedOutline className="text-[#FFB508] " /></span> Wide
              Variety of Equipment: Excavators, pelutars, dozers, rollers,
              lobets, and more.
            </h4>
            <h4 className="py-2 font-serif flex gap-2 items-center">
             <span className="text-3xl"> <TiInputCheckedOutline className="text-[#FFB508] " /></span>Competitive Pricing: Affordable rental rates tailored to meet your budget.
            </h4>
            <h4 className="py-2 font-serif flex gap-2 items-center">
             <span className="text-3xl"> <TiInputCheckedOutline className="text-[#FFB508] " /></span>Expert Support: Experienced technicians provide exceptional service and support.
            </h4>
            <h4 className="py-2 font-serif flex gap-2 items-center">
             <span className="text-3xl"> <TiInputCheckedOutline className="text-[#FFB508] " /></span>Flexible Rental Plans: Daily, weekly, or monthly rental options.
            </h4>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default WhyUs;

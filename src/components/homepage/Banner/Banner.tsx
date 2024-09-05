import Button from '../../ui/Button/Button';


const Banner = () => {
  return (
    <div className="hero text-black min-h-[90vh]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/banner-img.jpg"
          className="lg:max-w-xl rounded-lg "
        />
        <div>
          <h1 className="text-xl lg:text-3xl font-bold font-serif">Welcome to UZZAL MOTOR </h1>
          <p className="py-6 font-serif">
          Your trusted partner for construction equipment rentals and services. From small residential projects to large-scale commercial constructions, our extensive range of high-quality machinery ensures that you have the right tools for the job.
          </p>
         <Button>Rent Machinaries</Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

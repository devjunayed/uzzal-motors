type THeadingProps = {
  children: string;
};

const Heading = ({ children }: THeadingProps) => {
  return (
    <h1 className=" text-center text-xl lg:text-3xl text-black font-bold">
      {children}
    </h1>
  );
};

export default Heading;

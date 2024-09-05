type THeadingProps = {
  children: string;
};

const Heading = ({ children }: THeadingProps) => {
  return (
    <h1 className="my-10 text-center text-xl lg:text-3xl text-black font-bold">
      {children}
    </h1>
  );
};

export default Heading;

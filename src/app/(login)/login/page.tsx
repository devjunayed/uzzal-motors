import React from "react";

export const metadata = {
  title: "Uzzal Motor | Login",
};

const Loginpage = () => {
  return (
    <div className="h-[100vh] bg-federal_blue text-black w-full flex items-center justify-center">
      <div className="flex flex-col gap-2 size-96 p-4 bg-white border border-1  rounded-md">
        <h1 className="mx-auto text-2xl uppercase italic my-4">Uzzal Motor</h1>
        <label>Username:</label>
        <input
          type="text"
          className="text-sm border-[1px] bg-white  pl-2"
          placeholder="username..."
        />

        <label>password:</label>
        <input
          type="text"
          className="text-sm bg-white border pl-2"
          placeholder="password..."
        />

        <input
          type="submit"
          value={"Login "}
          className="bg-selective_yellow w-1/2 py-1 rounded-md px-4"
        />
      </div>
    </div>
  );
};

export default Loginpage;

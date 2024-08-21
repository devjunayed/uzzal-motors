"use server"


import { getCookie } from "@/utils/lib";
import { ReactNode } from "react";

const IsAdmin =  ({ children }: { children: ReactNode }) => {


  return <div>{children}</div>;
};

export default IsAdmin;

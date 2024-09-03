"use client";

import { getCookie } from "@/utils/lib";
import { createContext, ReactNode, useEffect, useState } from "react";

interface TokenContextType {
  token: string;
}

export const TokenContext = createContext<TokenContextType | null>(null);

export function Providers({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string>("");

  // getting token and assigning to the
  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookie();
      setToken(token as string);
    };
    fetchToken();
  }, []);

  const values = {
    token,
  };

  return (
    <TokenContext.Provider value={values}>{children}</TokenContext.Provider>
  );
}

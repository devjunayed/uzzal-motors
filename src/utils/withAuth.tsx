// src/utils/withAuth.tsx
import React, { useEffect, useState } from "react";
import { getCookie } from "./lib";
import { useRouter } from "next/navigation";

const withAuth = (Component: React.ComponentType<any>) => {
  return function WithAuth(props: any) {
    const [token, setToken] = useState<string | null | undefined>(null);
    const [loading, setLoading] = useState(true); // Track loading state
    const router = useRouter();

    useEffect(() => {
      const fetchToken = async () => {
        try {
          const fetchedToken = await getCookie();
          setToken(fetchedToken);
        } catch (error) {
          console.error("Failed to fetch token", error);
          setToken(null); // Handle token fetch error by treating as no token
        } finally {
          setLoading(false); // Ensure loading is set to false regardless of success or failure
        }
      };

      fetchToken();
    }, []);

    useEffect(() => {
      if (!loading && token === null || token === undefined) {
        router.replace("/admin/login");
      }
    }, [loading, token, router]);

    if (loading) return <div>Loading...</div>; // Display a loading indicator

    if (token === null) {
      router.replace("/admin/login")
      return null;
    }; // Wait until token is fetched

    if(token){
      return <Component {...props} />;
    }
  };
};

export default withAuth;

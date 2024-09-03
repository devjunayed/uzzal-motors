"use client"
import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "@/app/providers";
import IdFrontPage from "../IdFrontPage/IdFrontPage";

const AllEmployee: React.FC = () => {
  const context = useContext(TokenContext);

  // Define state to hold the fetched data
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  console.log(context);

  useEffect(() => {
    const fetchData = async () => {
      if (!context) return; // Handle case where context is not provided

      try {
        const response = await fetch("http://localhost:5000/api/v1/employee", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${context.token}`,
          },
        });
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [context]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>
    <div>{data?.length}</div>
    <div><IdFrontPage address={{street: ""}}  id={"" }name="" phone="" key={""} /></div>
  </div>;
};

export default AllEmployee;

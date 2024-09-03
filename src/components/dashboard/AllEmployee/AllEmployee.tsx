"use client";
import React, { useContext, useEffect, useState } from "react";
import { TokenContext } from "@/app/providers";
import AllEmployeeCard from "./AllEmployeeCard";

const AllEmployee: React.FC = () => {
  const context = useContext(TokenContext);

  // Define state to hold the fetched data
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  console.log(data);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-wrap gap-4 justify-center">
        {data?.map((employee) => (
          <div key={employee.id}>
            <div>
              <AllEmployeeCard 
              designation={employee.designation}
                imgUrl={employee.imgUrl}
                address={{
                  village: employee.address.village,
                  upazila: employee.address.upazila,
                  district: employee.address.district,
                }}
                id={employee.id}
                name={employee.name}
                phone={employee?.contactNumber}
                key={employee.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEmployee;

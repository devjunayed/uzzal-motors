"use client";
import React, { useContext, useEffect, useState } from "react";
import AllEmployeeCard from "./AllEmployeeCard";

const AllEmployee: React.FC = () => {

  // Define state to hold the fetched data
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch("http://localhost:5000/api/v1/employee", {
          method: "GET",
          headers: {
            Authorization: `Bearer`,
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
  }, []);

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
                data={employee}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEmployee;

import PrintIdCard from '@/components/dashboard/PrintIdCard/PrintIdCard';
import React from 'react';

// Function to generate static paths
export async function generateStaticParams() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  return users.map((user: { id: number }) => ({
    employeeId: user.id.toString(), // Ensure the ID is a string
  }));
}

// Function to fetch data for a specific user
async function getEmployeeData(employeeId: string) {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${employeeId}`).then((res) => res.json());
  return user;
}

export const metadata = {
  title: "Uzzal Motors | Employee Id card",
}

// Page Component
const Employee = async ({ params }: { params: { employeeId: string } }) => {
  const user = await getEmployeeData(params.employeeId);

  console.log(user);

  return (
    <div>
      <PrintIdCard {...user} />
    </div>
  );
};

export default Employee;

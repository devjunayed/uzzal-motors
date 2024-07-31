import React from 'react';

// Function to generate static paths
export async function generateStaticParams() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

  return users.map((user: { id: number }) => ({
    userId: user.id.toString(), // Ensure the ID is a string
  }));
}

// Function to fetch data for a specific user
async function getUserData(userId: string) {
  const user = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json());
  return user;
}

// Page Component
const UserPage = async ({ params }: { params: { userId: string } }) => {
  const user = await getUserData(params.userId);

  return (
    <div>
      <h1>User Information</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};

export default UserPage;

"use server";

import { cookies } from "next/headers";

export const setCookie = (token: string) => {
    cookies().set("token", token, {
        path: "/",  // Set the cookie at the root level
        httpOnly: true,  // Cookie accessible only by the server
        sameSite: "lax",  // Prevent CSRF attacks
        secure: process.env.NODE_ENV === "production", // Only send cookie over HTTPS in production
        maxAge: 60 * 60 * 24 * 7 // Optional: Set cookie to expire after 1 week
    });
};

export const getCookie = () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token")?.value; // Get the value of the cookie
    return token?.toString() ; // Return the token or null if it doesn't exist
};

export const deleteCookie = () => {
    cookies().delete("token"); // Delete the cookie at the root level
};

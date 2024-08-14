"use server"
import { cookies } from "next/headers"

export const setCookie = (token: string) => {
    cookies().set("token", token);
}

export const getCookie = () => {
    const token = cookies().get("token");
    return token;
}

export const deleteCookie = () => {
    cookies().delete("token")
}
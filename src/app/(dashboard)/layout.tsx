import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import DashboardMenu from "@/components/dashboard/DashboardMenu/DashboardMenu";
import { Providers } from "../providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Uzzal Motors dashboard created by Md Junayed, Author website is https://devjunayed.xyz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <DashboardMenu>{children}</DashboardMenu>
        </Providers>
      </body>
    </html>
  );
}

/** @format */

import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import MainNav from "@/components/MainNav";
import { headers } from "next/headers";
import path from "path";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Designo agency website",
  description:
    "This is a solution to the Designo agency website challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = headers().get("x-next-pathname") as string;
  return (
    <html lang="en">
      <body
        className={twMerge(
          jost.className,
          "antialiased",
          "bg-white",
          "text-dark-gray",
        )}
      >
        <header className="fixed z-[9998] w-full bg-white shadow-sm">
          <MainNav pathName={pathname} />
        </header>
        {children}
      </body>
    </html>
  );
}

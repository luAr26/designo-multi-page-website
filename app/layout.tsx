/** @format */

import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import MainNav from "@/components/MainNav";

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
        <header>
          <MainNav />
          {children}
        </header>
      </body>
    </html>
  );
}

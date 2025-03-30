import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IEEE Hands-On Printed Circuit Board Engineering [HOPE]",
  description:
    "HOPE is an engineering design class for PCB-related design problems requiring PCB-related design solutions. Gaining practical experience with soldering, bringup, and testing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <header className="bg-white shadow-md">
        <NavBar join={false}/>
      </header>
      {children}
    </main>
  );
}

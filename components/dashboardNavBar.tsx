"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import SignOutButton from "@/components/signOutButton";

const DashboardNavBar = () => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`nav-bar px-10 z-2 shadow-md ${
        hasScrolled
          ? `transition-all duration-500 ease-in-out bg-white/90`
          : "relative"
      }`}
    >
      <div className="flex items-center justify-between gap-10">
        <Link href="/">
          <Image
            src="/IEEE_logo.png"
            alt="image"
            width={75}
            height={75}
          />
        </Link>
        <Link href="/dashboard" className="dash-nav-link">
          Dashboard
        </Link>
        <Link href="/courses" className="dash-nav-link">
          Courses
        </Link>
        <Link href="/calendar" className="dash-nav-link">
          Calendar
        </Link>
      </div>
      <div className="flex items-center justify-between gap-10">
        <SignOutButton />
        <Image src={"/IEEE_logo.png"} alt={`Image of user`} width={50} height={50} className="rounded-md"/>
      </div>
    </nav>
  );
};

export default DashboardNavBar;

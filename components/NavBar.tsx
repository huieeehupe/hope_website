"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const NavBar = ({ join }: { join: Boolean }) => {
  const [hasScrolled, setHasScrolled] = React.useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
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
      className={`nav-bar z-2 ${
        hasScrolled
          ? `bg-black/85 shadow-lg transition-all duration-500 ease-in-out`
          : "bg-transparent"
      }`}
    >
      <Link href="/">
        <Image
          src={hasScrolled ? "/IEEE_logo.png" : "/IEEE_logo_white.png"}
          alt="image"
          width={85}
          height={85}
        />
      </Link>
      <div className="flex items-center justify-between gap-20">
        <div className="nav-links-container">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/hope/#about" className="nav-link">
            About
          </Link>
          <Link href="/hope/#projects" className="nav-link">
            Projects
          </Link>
          <Link href="/hope/#curriculum" className="nav-link">
            Curriculum
          </Link>
          <Link href="/hope/#calendar" className="nav-link">
            Calendar
          </Link>
          <Link href="/hope/#contact" className="nav-link">
            Contact
          </Link>
        </div>
        {join ? (
          <a href="/sign-in">
            <button className={`join-button text-white`}>
              Join the class!
            </button>
          </a>
        ) : (
          <p></p>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

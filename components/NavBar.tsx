"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const NavBar = () => {
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
          ? "bg-black/85 shadow-lg transition-all duration-500 ease-in-out "
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
          <Link href="#about" className="nav-link">
            About
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
          <Link href="/contact" className="nav-link">
            Contact
          </Link>
        </div>
        <a href="https://forms.office.com/r/Xz0BSJSwt8">
          <button className={`join-button text-white`}>Join the class!</button>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;

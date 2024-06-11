"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex flex-[1] items-center justify-between overflow-hidden p-4">
        <Link href="/">
          <Image
            src="/assets/Logo-White.svg"
            alt="logo"
            width={0}
            height={0}
            style={{ width: "96px", height: "auto" }}
            className="mx-1"
            id="homeLogo"
            priority={false}
          />
        </Link>
      </nav>
    </>
  );
};

export default Navbar;

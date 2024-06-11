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

        <div className="md:hidden">
          <button
            id="main-menu-button"
            aria-label="Main Navigation Menu button for mobile"
            onClick={toggleNavbar}
          >
            {isOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="text-gold-500 hover:text-white-100 text-4xl"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="text-gold-500 hover:text-white-100 text-4xl"
              />
            )}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="flex basis-full flex-col items-center md:hidden">
          <ul className="">
            <MainLinks />
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

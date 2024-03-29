import React from "react";
import Link from "next/link";
import Image from "next/image";

// Dynamic imports
import { ThemeSwitcher } from "@components/index";

const NavBar = () => {
  return (
    <nav className="container flex h-16 w-full items-center justify-between px-5 py-10">
      <Link className="flex items-center justify-center gap-4" href="/">
        <Image
          src={"/images/books.svg"}
          alt="Three books lined up"
          width="45"
          height="45"
        />
        <div className="text-lg font-header sm:text-2xl">
          <span className="text-myDarkGreen">My</span>
          Dev
          <span className="text-myImperialBlue">Journey</span>
        </div>
      </Link>
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;

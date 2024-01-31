import React from "react";
import Link from "next/link";
import ThemeSwitcher from "../reuseable/ThemeSwitcher";
import Image from "next/image";

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
        <div className="text-2xl font-header">
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

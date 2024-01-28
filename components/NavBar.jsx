import React from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="flex h-16 w-full items-center justify-between">
      <Link href="/">
        <div>Sirasit's Blog</div>
      </Link>
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;

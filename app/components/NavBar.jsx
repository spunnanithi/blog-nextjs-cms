import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="flex h-16 w-full items-center justify-between">
      <Link href="/">
        <div>Sirasit's Blog</div>
      </Link>
      <div>Theme Switcher</div>
    </nav>
  );
};

export default NavBar;

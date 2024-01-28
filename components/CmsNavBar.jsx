import React from "react";
import Link from "next/link";
import Image from "next/image";

const CMSNavBar = () => {
  return (
    <div className="flex items-center justify-between px-5 py-1">
      <Link href="/" className="">
        <Image
          src={"/images/back-arrow.svg"}
          alt="Back arrow"
          width="45"
          height="45"
        />
      </Link>
      <div className="font-header text-2xl">
        Dev
        <span className="text-secondary-light dark:text-secondary-dark">
          Journey
        </span>
      </div>
    </div>
  );
};

export default CMSNavBar;

"use client";

import { Button } from "@components/ui/button";
import allContentTypes from "@data/contentTypes";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const ContentTypeTab = () => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex flex-nowrap justify-evenly">
        {allContentTypes.map((type, index) => {
          const isActive = pathname === type.url;

          const activeLinkClass = isActive
            ? "shadow-lg border-4 border-myDarkBlue text-myBlue hover:text-myImperialBlue hover:bg-myGreyBlue dark:border-myLightGreyBlue dark:text-myGreyBlue dark:hover:text-myImperialBlue dark:hover:bg-myBlue"
            : "";
          return (
            <li>
              <Link href={type.url}>
                <Button
                  variant="ghost"
                  className={`w-auto transform cursor-pointer px-8 py-6 text-2xl font-bold  transition-all hover:scale-105 hover:bg-transparent hover:text-myImperialBlue hover:shadow-none md:mx-5 ${activeLinkClass}`}
                  key={index}
                >
                  {type.name}
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContentTypeTab;

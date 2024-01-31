import Link from "next/link";
import { Github, Linkedin, User } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { getCurrentYear } from "@utils/FormatDate";

export default function Footer() {
  const socialMediaAccounts = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sirasit-punnanithi",
      icon: <Linkedin />,
    },
    {
      name: "Github",
      url: "https://www.github.com/spunnanithi",
      icon: <Github />,
    },
    {
      name: "Personal Website",
      url: "https://punnanithi-portfolio.vercel.app/",
      icon: <User />,
    },
  ];

  const internalLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/",
    },
    {
      name: "Contact",
      url: "/",
    },
  ];

  return (
    <>
      <div className="container mx-auto flex flex-wrap items-center justify-center px-4 py-14 md:justify-around">
        <div className="flex flex-wrap justify-center">
          <ul className="flex items-center gap-7">
            <TooltipProvider>
              {internalLinks.map((link) => {
                return (
                  <Tooltip key={link.name}>
                    <TooltipTrigger>
                      <li className="basis-1/3">
                        <Link href={link.url}>{link.name}</Link>
                      </li>
                    </TooltipTrigger>
                    <TooltipContent>Go to {link.name}</TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </ul>
        </div>
        <div className="mt-4 flex justify-center gap-7 lg:mt-0">
          <TooltipProvider>
            {socialMediaAccounts.map((account) => {
              return (
                <Tooltip key={account.name}>
                  <TooltipTrigger>
                    <Link
                      href={account.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {account.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>{account.name}</TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </div>
      </div>
      <div className="pb-12">
        <p className="text-center">
          @{getCurrentYear()} All rights reserved by spunnanithi.
        </p>
      </div>
    </>
  );
}

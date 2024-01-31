import React from "react";
import Header from "@components/Header";
import Link from "next/link";
import Separator from "@components/Separator";
import Image from "next/image";
import { Button } from "@components/ui/button";

export default function NotFound() {
  return (
    <div className="flex w-full flex-col flex-wrap justify-center">
      <Header title="404 - Page Not Found" />
      <Separator />
      <div className="flex items-center justify-center">
        <Image
          src="/images/404-not-found.svg"
          width={500}
          height={300}
          loading="lazy"
          alt="alien abducting a person"
        />
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link href={"/"}>
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}

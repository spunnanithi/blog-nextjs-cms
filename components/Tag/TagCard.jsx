"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const TagCard = ({ tag, url }) => {
  const router = useRouter();
  return (
    <Button
      className="bg-slate-800 p-2 lowercase text-myLightGreyBlue dark:bg-myLightGreyBlue dark:text-slate-800"
      variant="link"
      onClick={() => router.push(`/tags/${tag?.slug?.current}`)}
    >
      #{tag?.name}
    </Button>
  );
};

export default TagCard;

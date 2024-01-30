"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const TagCard = ({ tag, isTagCount }) => {
  const router = useRouter();

  return (
    <Button
      className=" bg-slate-800 p-2 lowercase text-myLightGreyBlue dark:bg-myLightGreyBlue dark:text-slate-800"
      variant="link"
      onClick={() => router.push(`/tags/${tag?.slug?.current}`)}
    >
      #{tag?.name} {isTagCount && `(${tag?.tagCount})`}
    </Button>
  );
};

export default TagCard;

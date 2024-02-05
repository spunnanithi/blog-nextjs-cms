"use client";

import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const PostTagCard = ({ tag, isTagCount }) => {
  const router = useRouter();

  return (
    <Button
      className="p-2 lowercase text-slate-800 dark:text-slate-200"
      variant="link"
      onClick={() => router.push(`/tags/${tag?.slug?.current}`)}
    >
      #{tag?.slug?.current} {isTagCount && `(${tag?.tagCount})`}
    </Button>
  );
};

export default PostTagCard;

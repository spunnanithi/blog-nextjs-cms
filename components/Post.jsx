import React from "react";
import Link from "next/link";
import Image from "next/image";
import { convertIsoToDate } from "@utils/FormatDate";
import { Button } from "./ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Post = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug?.current}`}>
      <Card className="flex bg-myGreyBlue shadow-sm shadow-myDarkBlue hover:bg-myBlue hover:shadow-md dark:bg-myBlue dark:shadow-mySteelBlue hover:dark:bg-myGreyBlue">
        {/* Left Side of Card */}
        <div className="flex flex-shrink-0 items-center pl-6">
          <Image
            src={"/images/books.svg"}
            alt="books"
            width={100}
            height={50}
          />
        </div>

        {/* Right Side of Card */}
        <div>
          <CardHeader className="text-header font-header">
            <CardTitle>{post?.title}</CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent>
            <p>{post?.excerpt}</p>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-5">
            <p>
              Published on:{" "}
              <span className="font-subtitle">
                {convertIsoToDate(post.publishedAt)}
              </span>
            </p>
            <div className="flex flex-wrap gap-3">
              {post?.tags?.map((tag) => {
                return (
                  <Button variant="link" key={tag._id}>
                    <Link href={`/tag/${tag.slug.current}`}>#{tag.name}</Link>
                  </Button>
                );
              })}
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default Post;

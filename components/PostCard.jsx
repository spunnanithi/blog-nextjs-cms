import React from "react";
import Link from "next/link";
import { convertIsoToDate } from "@utils/FormatDate";
import { Button } from "./ui/button";
import ImagePortableComponent from "./Post/PostContent/ImagePortableComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const PostCard = ({ post }) => {
  return (
    <Link href={`/posts/${post.slug?.current}`}>
      <Card className="flex bg-myGreyBlue shadow-sm shadow-myDarkBlue hover:bg-myBlue hover:shadow-md dark:bg-myBlue dark:shadow-mySteelBlue hover:dark:bg-myGreyBlue">
        {/* Left Side of Card */}
        <div className="flex flex-shrink-0 items-center pl-6">
          <ImagePortableComponent
            value={post?.mainImage}
            imageWidth={200}
            imageHeight={100}
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
                    #{tag.name}
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

export default PostCard;

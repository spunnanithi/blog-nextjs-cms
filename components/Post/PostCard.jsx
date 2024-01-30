import React from "react";
import Link from "next/link";
import { convertIsoToDate } from "@utils/FormatDate";
import ImagePortableComponent from "./PostContent/ImagePortableComponent";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import TagCard from "../Tag/TagCard";
import { cn } from "lib/utils";

const PostCard = ({ post }) => {
  const cardClassNames =
    "flex flex-col justify-between transform transition duration-300 bg-myGreyBlue shadow-sm shadow-myDarkBlue hover:scale-105 hover:shadow-md dark:bg-myBlue dark:shadow-mySteelBlue";

  return (
    <Card className={cn("w-[350px]", cardClassNames)}>
      <Link href={`/posts/${post.slug?.current}`}>
        <div className="flex flex-shrink-0 justify-center">
          <ImagePortableComponent
            value={post?.mainImage}
            imageWidth={300}
            imageHeight={100}
            borderRadius={8}
          />
        </div>

        <CardHeader className="text-header font-header">
          <CardTitle>{post?.title}</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p>{post?.excerpt}</p>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-5">
        <p>
          Published on:{" "}
          <span className="font-subtitle">
            {convertIsoToDate(post.publishedAt)}
          </span>
        </p>
        <div className="flex flex-wrap gap-3">
          {post?.tags?.map((tag) => {
            return <TagCard key={tag._id} tag={tag} />;
          })}
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

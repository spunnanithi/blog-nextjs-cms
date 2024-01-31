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
import { urlForImage } from "@sanity/lib/image";
import AuthorAvatar from "@components/Author/AuthorAvatar";

const PostCard = ({ post }) => {
  const cardClassNames =
    "flex flex-col justify-between transform transition duration-300 bg-myGreyBlue shadow-sm shadow-myDarkBlue border-b-8 border-myImperialBlue dark:border-mySteelBlue hover:scale-105 hover:shadow-md dark:bg-myBlue dark:shadow-mySteelBlue";

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
          <CardTitle className="hover:underline hover:underline-offset-4">
            {post?.title}
          </CardTitle>
          <CardDescription className="flex flex-col flex-wrap gap-5">
            <span className="mt-2 flex items-center gap-5">
              <AuthorAvatar
                src={urlForImage(post?.author?.avatar?.asset?._ref)}
                alt={post?.author?.avatar?.alt}
              />

              <span className="font-title text-myImperialBlue dark:text-slate-900">
                {post?.author?.name}
              </span>
            </span>
            <div className="">
              <span className="font-title text-myImperialBlue dark:text-slate-900">
                {convertIsoToDate(post?.publishedAt)} |{" "}
                {`${post?.estimatedReadingTime} mins`}
              </span>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>{post?.excerpt}</div>
        </CardContent>
      </Link>
      <CardFooter className="flex flex-col items-start gap-5">
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

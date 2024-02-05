import React from "react";
import Link from "next/link";
import { convertIsoToDate } from "@utils/FormatDate";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { cn } from "lib/utils";
import { urlForImage } from "@sanity/lib/image";

// Dynamic imports
import {
  AuthorAvatar,
  PostTagCard,
  ImagePortableComponent,
  Separator,
} from "@components/index";

const PostCard = ({ post }) => {
  const cardClassNames =
    "flex flex-col justify-between transform transition duration-300 bg-myGreyBlue shadow-sm hover:shadow-myDarkBlue border-b-8 border-b-myImperialBlue dark:border-b-myImperialBlue hover:scale-105 hover:shadow-md dark:bg-myBlue dark:shadow-mySteelBlue";

  return (
    <Card className={cn("w-[350px]", cardClassNames)}>
      <Link href={`/posts/${post.slug?.current}`}>
        <div className="flex flex-shrink-0 justify-center">
          <ImagePortableComponent
            value={post?.mainImage}
            imageWidth={350}
            imageHeight={100}
            borderRadius={8}
          />
        </div>

        {/* Card Header */}
        <CardHeader className="text-header font-header">
          <CardTitle className="hover:underline hover:underline-offset-4">
            {post?.title}
          </CardTitle>
          <CardDescription className="flex flex-col flex-wrap gap-5">
            <span className="mt-6 text-base font-subtitle text-myImperialBlue dark:text-slate-900">
              {convertIsoToDate(post?.publishedAt)} |{" "}
              {`${post?.estimatedReadingTime} mins`}
            </span>
          </CardDescription>
        </CardHeader>

        {/* Card Content */}
        <CardContent className="text-sm text-slate-800 dark:text-slate-200">
          {post?.excerpt}
        </CardContent>
      </Link>

      {/* Card Footer */}
      <CardFooter className="flex flex-col items-start gap-2">
        <span className="flex items-center gap-5 text-base">
          <AuthorAvatar
            src={urlForImage(post?.author?.avatar?.asset?._ref)}
            alt={post?.author?.avatar?.alt}
          />
          <span className="text-base font-title text-myImperialBlue dark:text-slate-900">
            {post?.author?.name}
          </span>
        </span>
        <div>
          <ul className="no-scrollbar flex max-w-[300px] flex-row gap-3 overflow-x-auto">
            {post?.tags?.map((tag) => {
              return (
                <li>
                  <PostTagCard key={tag._id} tag={tag} />
                </li>
              );
            })}
          </ul>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;

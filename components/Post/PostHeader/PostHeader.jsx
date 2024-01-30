import React from "react";
import Header from "@components/Header";
import { Button } from "@components/ui/button";
import { convertIsoToDate } from "@utils/FormatDate";
import Link from "next/link";
import ImagePortableComponent from "@components/Post/PostContent/ImagePortableComponent";
import Separator from "@components/Separator";

const PostHeader = ({ singlePost }) => {
  const { title, mainImage, publishedAt, tags } = singlePost;

  return (
    <>
      <Header title={title} />

      <Separator />

      <div className="mb-10 flex flex-wrap justify-around">
        <div>Author: Sirasit Punnanithi</div>
        <div>
          Published on: <span>{convertIsoToDate(publishedAt)}</span>
        </div>
        <div>Read Time: 5 mins</div>
      </div>

      <div className="flex flex-col items-center gap-5">
        <div>
          <ImagePortableComponent
            imageHeight={1000}
            imageWidth={1100}
            value={mainImage}
          />
        </div>
        <div className="flex flex-wrap gap-5">
          {tags.map((tag) => {
            return (
              <Button
                className="bg-slate-800 p-2 lowercase text-myLightGreyBlue dark:bg-myLightGreyBlue dark:text-slate-800"
                variant="link"
                key={tag._id}
              >
                <Link href={`/tag/${tag.slug.current}`}>#{tag.name}</Link>
              </Button>
            );
          })}
        </div>
      </div>
      <Separator />
    </>
  );
};

export default PostHeader;

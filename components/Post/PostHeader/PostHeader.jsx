import React from "react";
import Header from "@components/reuseable/Header";
import { convertIsoToDate } from "@utils/FormatDate";
import ImagePortableComponent from "@components/Post/PostContent/ImagePortableComponent";
import Separator from "@components/reuseable/Separator";
import TagCard from "@components/Tag/TagCard";
import AuthorAvatar from "@components/Author/AuthorAvatar";
import { urlForImage } from "@sanity/lib/image";
import Image from "next/image";

const PostHeader = ({ singlePost }) => {
  const { title, mainImage, publishedAt, tags, author, estimatedReadingTime } =
    singlePost;

  return (
    <>
      <Header title={title} />

      <Separator />

      <div className="mb-10 flex flex-wrap items-center justify-around">
        <div className="flex items-center gap-5">
          <AuthorAvatar
            src={urlForImage(singlePost?.author?.avatar?.asset?._ref)}
            alt={singlePost?.author?.avatar?.alt}
          />

          <span className="font-title">{singlePost?.author?.name}</span>
        </div>
        <div>
          <span>{convertIsoToDate(publishedAt)}</span>
        </div>
        <div className="flex items-center gap-3">
          <Image
            src={"/images/open-book.svg"}
            alt={"Open book icon"}
            width={40}
            height={40}
          />{" "}
          {estimatedReadingTime} mins
        </div>
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
            return <TagCard key={tag._id} tag={tag} />;
          })}
        </div>
      </div>
      <Separator />
    </>
  );
};

export default PostHeader;

import React from "react";
import { convertIsoToDate, convertIsoToFromNow } from "@utils/FormatDate";
import { urlForImage } from "@sanity/lib/image";
import Image from "next/image";
import { ChevronsRight } from "lucide-react";

// Dynamic imports
import {
  TagCard,
  Separator,
  Header,
  AuthorAvatar,
  ImagePortableComponent,
} from "@components/index";

const PostHeader = ({ singlePost }) => {
  const { title, mainImage, publishedAt, tags, author, estimatedReadingTime } =
    singlePost;

  return (
    <>
      <Header title={title} />

      <Separator />

      <div className="mb-10 flex flex-wrap items-center justify-around gap-10 font-title">
        <div className="flex items-center gap-5">
          <AuthorAvatar
            src={urlForImage(author?.avatar?.asset?._ref)}
            alt={author?.avatar?.alt}
          />

          <span>{author?.name}</span>
        </div>
        <div>
          PUBLISHED <ChevronsRight className="inline-flex" />{" "}
          <span className="text-mySteelBlue">
            {convertIsoToDate(publishedAt)}
          </span>
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
        <div>
          <span className="font-title">LAST UPDATED</span>{" "}
          <span>
            <ChevronsRight size={25} className="inline-flex" />
          </span>{" "}
          <span className="font-title text-mySteelBlue">
            {convertIsoToFromNow(singlePost?._updatedAt)}
          </span>
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

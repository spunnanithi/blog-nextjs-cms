import React from "react";
import Header from "@components/reuseable/Header";
import Separator from "@components/reuseable/Separator";
import { client } from "@sanity/lib/client";
import TagCard from "@components/Tag/TagCard";
import {
  META_SEO_KEYWORDS,
  META_TAG_DESCRIPTION,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import ContentTypeTab from "@components/ContentTypeTab/ContentTypeTab";

export const metadata = {
  title: `Tags | ${WEBSITE_NAME}`,
  description: META_TAG_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};

const getAllTags = async () => {
  const query = `*[_type == "tag"] {
    name,
    slug,
    _id,
    "tagCount": count(*[_type == "post" && references("tag", ^._id)])
  }`;

  const data = await client.fetch(query);
  return data;
};

export const revalidate = 60;

const TagHome = async () => {
  const tags = await getAllTags();

  return (
    <div className="container flex w-full flex-col">
      <Header title="Tags" />
      <ContentTypeTab />
      <Separator />

      <div className="flex flex-wrap justify-around">
        {tags?.length > 0 &&
          tags?.map((tag) => {
            return <TagCard isTagCount key={tag._id} tag={tag} />;
          })}
      </div>
    </div>
  );
};

export default TagHome;

import React from "react";
import {
  META_SEO_KEYWORDS,
  META_TAG_DESCRIPTION,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import { getAllTags } from "@actions/get-all-tags";

// Dynamic imports
import { Header, Separator, TagCard, ContentTypeTab } from "@components/index";

export const metadata = {
  title: `Tags | ${WEBSITE_NAME}`,
  description: META_TAG_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};

export const revalidate = 15;

const TagHome = async () => {
  const tags = await getAllTags();

  return (
    <div className="container flex w-full flex-col">
      <Header title="All Tags" />
      <ContentTypeTab />
      <Separator />

      <div className="flex flex-wrap justify-around gap-5">
        {tags?.length > 0 &&
          tags?.map((tag) => {
            return <TagCard isTagCount key={tag._id} tag={tag} />;
          })}
      </div>
    </div>
  );
};

export default TagHome;

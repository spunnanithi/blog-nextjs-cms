import React from "react";
import Header from "@components/Header";
import Separator from "@components/Separator";
import { client } from "@sanity/lib/client";
import TagCard from "@components/Tag/TagCard";

const getAllTags = async () => {
  const query = `*[_type == "tag"] {
    name,
    slug,
    _id,
  }`;

  const data = await client.fetch(query);
  return data;
};

export const revalidate = 60;

const TagHome = async () => {
  const tags = await getAllTags();

  return (
    <div className="flex w-full flex-col">
      <Header title="Tags" />
      <Separator />

      <div className="flex flex-wrap justify-around">
        {tags?.length > 0 &&
          tags?.map((tag) => {
            return <TagCard key={tag._id} tag={tag} />;
          })}
      </div>
    </div>
  );
};

export default TagHome;

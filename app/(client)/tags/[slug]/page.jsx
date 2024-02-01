import Header from "@components/reuseable/Header";
import PostCard from "@components/Post/PostCard";
import Separator from "@components/reuseable/Separator";
import { notFound } from "next/navigation";
import React from "react";
import {
  META_SEO_KEYWORDS,
  META_TAG_DESCRIPTION,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import { getPostsPerTagQuery } from "@sanity/lib/queries";
import ContentTypeTab from "@components/ContentTypeTab/ContentTypeTab";
import sanityFetch from "@sanity/lib/sanityFetch";

export async function generateMetadata({ params }) {
  const id = params.slug;

  return {
    title: `#${id} | ${WEBSITE_NAME}`,
    description: META_TAG_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
  };
}

export const revalidate = 60;

const Tag = async ({ params }) => {
  const postsPerTag = await sanityFetch(getPostsPerTagQuery, {
    slug: params.slug,
  });

  if (!postsPerTag) {
    return notFound();
  }

  return (
    <div className="container flex w-full flex-col">
      <Header title={`#${params.slug}`} />
      <ContentTypeTab />

      <Separator />
      <div className="flex flex-wrap justify-center gap-10">
        {postsPerTag?.length > 0
          ? postsPerTag?.map((post) => {
              return <PostCard key={post?._id} post={post} />;
            })
          : "No posts found"}
      </div>
    </div>
  );
};

export default Tag;

import { notFound } from "next/navigation";
import React from "react";
import {
  META_SEO_KEYWORDS,
  META_TAG_DESCRIPTION,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import { getPostsPerTagQuery } from "@sanity/lib/queries";
import sanityFetch from "@sanity/lib/sanityFetch";

// Dynamic imports
import { Header, PostCard, Separator, ContentTypeTab } from "@components/index";

export async function generateMetadata({ params }) {
  const id = params.slug;

  return {
    title: `#${id} | ${WEBSITE_NAME}`,
    description: META_TAG_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
  };
}

export const revalidate = 15;

const getPostsPerTag = async (params) => {
  const postsPerTag = await sanityFetch(getPostsPerTagQuery, {
    slug: params.slug,
  });

  if (!postsPerTag) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts per tag");
  }

  return postsPerTag;
};

const Tag = async ({ params }) => {
  const postsPerTag = getPostsPerTag(params);

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

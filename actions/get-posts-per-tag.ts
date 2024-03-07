"use server";

import { getPostsPerTagQuery } from "../sanity/lib/queries";
import sanityFetch from "../sanity/lib/sanityFetch";

export const getPostsPerTag = async (params: { slug: string }) => {
  const postsPerTag = await sanityFetch(getPostsPerTagQuery, {
    slug: params.slug,
  });

  if (!postsPerTag) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts per tag");
  }

  return postsPerTag;
};

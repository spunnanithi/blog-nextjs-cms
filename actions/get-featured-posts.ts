"use server";

import sanityFetch from "../sanity/lib/sanityFetch";
import { getFeaturedPostsQuery } from "../sanity/lib/queries";

export const getFeaturedPosts = async () => {
  const featuredPosts = await sanityFetch(getFeaturedPostsQuery);

  if (!featuredPosts) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch featured posts");
  }

  return featuredPosts;
};

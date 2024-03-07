"use server";

import sanityFetch from "../sanity/lib/sanityFetch";
import { getAllPostsQuery } from "../sanity/lib/queries";

export const getAllPosts = async () => {
  const posts = await sanityFetch(getAllPostsQuery);

  if (!posts) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }

  return posts;
};

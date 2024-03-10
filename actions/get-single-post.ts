"use server";

import sanityFetch from "../sanity/lib/sanityFetch";
import { getSinglePostQuery } from "../sanity/lib/queries";

export const getSinglePost = async (params: { slug: string }) => {
  const post = await sanityFetch(getSinglePostQuery, { slug: params.slug });

  if (!post) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post");
  }

  return post;
};

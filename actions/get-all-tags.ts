"use server";

import { getAllTagsQuery } from "../sanity/lib/queries";
import sanityFetch from "../sanity/lib/sanityFetch";

export const getAllTags = async () => {
  const tags = await sanityFetch(getAllTagsQuery);

  if (!tags) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch tags");
  }

  return tags;
};

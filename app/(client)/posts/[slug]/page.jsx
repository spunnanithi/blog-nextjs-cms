import { PortableText } from "@portabletext/react";
import React from "react";
import myPortableTextComponents from "@components/Post/PostContent/PortableComponent";
import { notFound } from "next/navigation";
import {
  META_POST_DESCRIPTION,
  META_SEO_KEYWORDS,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import { getSinglePostQuery } from "@sanity/lib/queries";
import sanityFetch from "@sanity/lib/sanityFetch";

// Dynamic imports
import { PostHeader } from "@components/index";

export async function generateMetadata({ params }) {
  const post = await sanityFetch(getSinglePostQuery, { slug: params.slug });

  return {
    title: `${post[0]?.title} | ${WEBSITE_NAME}`,
    description: META_POST_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
  };
}

export const revalidate = 15;

const getSinglePost = async (params) => {
  const post = await sanityFetch(getSinglePostQuery, { slug: params.slug });

  if (!post) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post");
  }

  return post[0];
};

const Post = async ({ params }) => {
  const singlePost = await getSinglePost(params);

  if (!singlePost) {
    return notFound();
  }

  return (
    <div className="container flex flex-col">
      {/* Header */}
      <PostHeader singlePost={singlePost} />

      {/* Content */}
      <div>
        <PortableText
          value={singlePost?.body}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default Post;

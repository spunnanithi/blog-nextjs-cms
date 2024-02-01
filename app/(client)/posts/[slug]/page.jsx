import { PortableText } from "@portabletext/react";
import React from "react";
import myPortableTextComponents from "@components/Post/PostContent/PortableComponent";
import PostHeader from "@components/Post/PostHeader/PostHeader";
import { notFound } from "next/navigation";
import {
  META_POST_DESCRIPTION,
  META_SEO_KEYWORDS,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import { getSinglePostQuery } from "@sanity/lib/queries";
import sanityFetch from "@sanity/lib/sanityFetch";

export async function generateMetadata({ params }) {
  const post = await sanityFetch(getSinglePostQuery, { slug: params.slug });

  return {
    title: `${post[0]?.title} | ${WEBSITE_NAME}`,
    description: META_POST_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
  };
}

export const revalidate = 60;

const Post = async ({ params }) => {
  const post = await sanityFetch(getSinglePostQuery, { slug: params.slug });
  const singlePost = post[0];

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

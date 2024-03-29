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
import { getSinglePost } from "@actions/get-single-post";
import TableOfContents from "@components/Post/TableOfContents";

// Dynamic imports
import { PostHeader } from "@components/index";

export async function generateMetadata({ params }) {
  const post = await sanityFetch(getSinglePostQuery, { slug: params.slug });

  return {
    title: `${post?.title} | ${WEBSITE_NAME}`,
    description: META_POST_DESCRIPTION,
    keywords: META_SEO_KEYWORDS,
  };
}

export const revalidate = 15;

const Post = async ({ params }) => {
  const singlePost = await getSinglePost(params);

  if (!singlePost) {
    return notFound();
  }

  return (
    <div className="container flex flex-col px-5 sm:px-40">
      {/* Header */}
      <PostHeader singlePost={singlePost} />

      <div className="3xl:fixed 3xl:bottom-96 3xl:right-72 flex justify-center">
        <TableOfContents headings={singlePost?.headings} />
      </div>

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

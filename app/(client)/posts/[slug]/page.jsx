import { PortableText } from "@portabletext/react";
import { client } from "@sanity/lib/client";
import React from "react";
import myPortableTextComponents from "@components/Post/PostContent/PortableComponent";
import PostHeader from "@components/Post/PostHeader/PostHeader";

// Function is run on the NextJS server and NOT the client
async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"] {
    _createdAt,
    _updatedAt,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const PostHome = async ({ params }) => {
  const post = await getPost(params.slug);
  const singlePost = post[0];

  return (
    <div className="flex flex-col">
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

export default PostHome;

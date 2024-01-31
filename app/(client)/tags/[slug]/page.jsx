import Header from "@components/reuseable/Header";
import PostCard from "@components/Post/PostCard";
import Separator from "@components/reuseable/Separator";
import { client } from "@sanity/lib/client";
import { notFound } from "next/navigation";
import React from "react";

async function getTag(slug) {
  const query = `*[_type == "post" && references(*[_type == "tag" && slug.current == "${slug}"]._id)] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      _id,
      tags[]-> {
        _id,
        slug,
        name
      }
  }`;

  const tag = await client.fetch(query);

  return tag;
}

export const revalidate = 60;

const Tag = async ({ params }) => {
  const postsPerTag = await getTag(params.slug);

  if (!postsPerTag) {
    return notFound();
  }

  return (
    <div className="flex w-full flex-col">
      <Header title={`#${params.slug}`} />

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

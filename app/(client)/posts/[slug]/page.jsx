import Header from "@components/Header";
import { Button } from "@components/ui/button";
import { client } from "@sanity/lib/client";
import { convertIsoToDate } from "@utils/FormatDate";
import Link from "next/link";
import React from "react";

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;

  const post = await client.fetch(query);
  return post;
}

const PostHome = async ({ params }) => {
  const post = await getPost(params.slug);
  const singlePost = post[0];

  return (
    <div className="flex flex-col items-center gap-5">
      <Header title={singlePost?.title} />
      <div className="flex flex-col items-center gap-5">
        <span>
          Published on: <span>{convertIsoToDate(singlePost?.publishedAt)}</span>
        </span>
        <div className="flex gap-5">
          {singlePost?.tags?.map((tag) => {
            return (
              <Button variant="link" key={tag._id}>
                <Link href={`/tag/${tag.slug.current}`}>#{tag.name}</Link>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostHome;

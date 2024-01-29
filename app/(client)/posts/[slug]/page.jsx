import Header from "@components/Header";
import { Button } from "@components/ui/button";
import { PortableText } from "@portabletext/react";
import { client } from "@sanity/lib/client";
import { urlForImage } from "@sanity/lib/image";
import { convertIsoToDate } from "@utils/FormatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == "${slug}"] {
    title,
    slug,
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

const richTextStyles = `
mt-14
text-justify
mx-auto
prose-headings:my-5
prose-h1:text-header
prose-h1:font-header
prose-h2:text-title
prose-h2:font-title
prose-h3:text-subtitle
prose-h3:font-subtitle
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-5
`;

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image src={urlForImage(value)} alt="alt" height={700} width={700} />
    ),
  },
};

const PostHome = async ({ params }) => {
  const post = await getPost(params.slug);
  const singlePost = post[0];

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Header */}
      <Header title={singlePost?.title} />

      {/* Content */}
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

      <div className={richTextStyles}>
        <PortableText
          value={singlePost?.body}
          components={myPortableTextComponents}
        />
      </div>
    </div>
  );
};

export default PostHome;

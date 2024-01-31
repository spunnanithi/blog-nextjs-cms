import { groq } from "next-sanity";
import { client } from "./client";

// ------------------------------------ Posts ------------------------------------ \\
export const getAllPostsQuery = groq`*[_type == "post"] | order(_createdAt desc) {
  _createdAt,
  _updatedAt,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  tags[]-> { _id, slug, name },
  author -> { name, slug, avatar },
  "numberOfCharacters": length(pt::text(body)),
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
}`;

export async function getSinglePost(slug) {
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

// ------------------------------------ Tags ------------------------------------ \\
export const getAllTagsQuery = groq`*[_type == "tag"] {
  name,
  slug,
  _id,
  "tagCount": count(*[_type == "post" && references("tag", ^._id)])
}`;

export async function getPostsPerTagQuery(slug) {
  const query = `*[_type == "post" && references(*[_type == "tag" && slug.current == "${slug}"]._id)] | order(publishedAt desc) {
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      _id,
      author -> { name, slug, avatar },
      "numberOfCharacters": length(pt::text(body)),
      "estimatedWordCount": round(length(pt::text(body)) / 5),
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
      tags[]-> {_id,slug,name}
  }`;

  const tag = await client.fetch(query);

  return tag;
}

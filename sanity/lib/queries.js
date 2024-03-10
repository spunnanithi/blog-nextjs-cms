import { groq } from "next-sanity";

// ------------------------------------ Posts ------------------------------------ \\
export const getAllPostsQuery = groq`*[_type == "post"] | order(publishedAt desc) {
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

export const getSinglePostQuery = groq`*[_type == "post" && slug.current == $slug][0] {
    _createdAt,
    _updatedAt,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    _id,
    "headings": body[style in ["h2"]],
    body,
    author -> { name, slug, avatar },
    "numberOfCharacters": length(pt::text(body)),
    "estimatedWordCount": round(length(pt::text(body)) / 5),
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
    tags[]-> { _id, slug, name }
}`;

// Query for the first SIX featured posts ordered by published date
export const getFeaturedPostsQuery = groq`*[_type == "post" && isFeatured == true] | order(publishedAt desc)[0..5] {
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

// ------------------------------------ Tags ------------------------------------ \\
export const getAllTagsQuery = groq`*[_type == "tag"] {
  name,
  slug,
  _id,
  "tagCount": count(*[_type == "post" && references("tag", ^._id)])
}`;

export const getPostsPerTagQuery = groq`*[_type == "post" && references(*[_type == "tag" && slug.current == $slug]._id)] | order(publishedAt desc) {
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

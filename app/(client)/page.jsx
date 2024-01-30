import Header from "@components/Header";
import PostCard from "@components/PostCard";
import { client } from "@sanity/lib/client";

// Function is run on the NextJS server and NOT the client
async function getPosts() {
  const query = `*[_type == "post"] {
    _createdAt,
    _updatedAt,
    title,
    slug,
    mainImage,
    publishedAt,
    excerpt,
    tags[]-> {
      _id,
      slug,
      name
    }
  }`;

  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-5">
      <Header title="Featured Posts" />
      {posts?.length > 0 &&
        posts?.map((post, index) => {
          return <PostCard key={index} post={post} />;
        })}
    </div>
  );
}

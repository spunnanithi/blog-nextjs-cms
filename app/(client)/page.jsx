import Header from "@components/reuseable/Header";
import PostCard from "@components/Post/PostCard";
import Separator from "@components/reuseable/Separator";
import { client } from "@sanity/lib/client";
import ContentTypeTab from "@components/ContentTypeTab/ContentTypeTab";
import HeroBanner from "@components/Hero/HeroBanner";

// Function is run on the NextJS server and NOT the client
async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
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
  const posts = await getAllPosts();

  return (
    <div className="mt-10 flex flex-col">
      <Header title="Featured Posts" />
      <ContentTypeTab />
      <Separator />
      <div className="flex flex-wrap justify-center gap-10">
        {posts?.length > 0 &&
          posts?.map((post, index) => {
            return <PostCard key={index} post={post} />;
          })}
      </div>
    </div>
  );
}

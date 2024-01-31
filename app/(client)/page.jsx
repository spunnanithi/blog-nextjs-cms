import Header from "@components/reuseable/Header";
import PostCard from "@components/Post/PostCard";
import Separator from "@components/reuseable/Separator";
import { client } from "@sanity/lib/client";
import ContentTypeTab from "@components/ContentTypeTab/ContentTypeTab";
import HeroBanner from "@components/Hero/HeroBanner";
import { getAllPostsQuery } from "@sanity/lib/queries";

export const revalidate = 60;

export default async function Home() {
  const posts = await client.fetch(getAllPostsQuery);

  return (
    <div className="flex w-full flex-col">
      <HeroBanner />
      <div id="main" className="container flex w-full flex-col pt-20">
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
    </div>
  );
}

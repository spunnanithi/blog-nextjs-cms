import Header from "@components/reuseable/Header";
import PostCard from "@components/Post/PostCard";
import Separator from "@components/reuseable/Separator";
import { client } from "@sanity/lib/client";
import HeroBanner from "@components/Hero/HeroBanner";
import { getAllPostsQuery } from "@sanity/lib/queries";
import { Button } from "@components/ui/button";
import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  const posts = await client.fetch(getAllPostsQuery);

  return (
    <div className="flex w-full flex-col">
      <HeroBanner />
      <div id="main" className="container flex w-full flex-col pt-20">
        <Header title="Featured Posts" />
        <Separator />
        <div className="flex flex-wrap justify-center gap-10">
          {posts?.length > 0 &&
            posts?.map((post, index) => {
              return <PostCard key={index} post={post} />;
            })}
        </div>
        <div className="mt-10 flex items-center justify-center">
          <Link href="/posts">
            <Button
              size="lg"
              className=" transform rounded-3xl bg-myDarkBlue text-myLightGreyBlue transition duration-200 hover:scale-105 hover:text-slate-200 dark:bg-myLightGreyBlue dark:text-myDarkBlue hover:dark:text-slate-900"
            >
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

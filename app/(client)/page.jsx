import { Button } from "@components/ui/button";
import Link from "next/link";

import { getAllPosts } from "@actions/get-all-posts";
import { getFeaturedPosts } from "@actions/get-featured-posts";
import { getAllTags } from "@actions/get-all-tags";

// Dynamic imports
import {
  HeroBanner,
  Header,
  Separator,
  PostCard,
  TagCard,
} from "@components/index";

export const revalidate = 15;

export default async function Home() {
  const posts = await getAllPosts();
  const featuredPosts = await getFeaturedPosts();
  const tags = await getAllTags();

  return (
    <div className="flex w-full flex-col">
      <HeroBanner />

      {/* ALL TAGS CONTAINER */}
      <div id="main" className="container flex w-full flex-col pt-20">
        <Header title="All Tags" />
        <Separator />

        <div className="flex flex-wrap justify-around gap-5">
          {tags?.length > 0 &&
            tags?.map((tag) => {
              return <TagCard isTagCount key={tag._id} tag={tag} />;
            })}
        </div>

        <div className="mt-10 flex items-center justify-center">
          <Link href="/tags">
            <Button
              size="lg"
              className=" transform rounded-3xl bg-myDarkBlue text-myLightGreyBlue transition duration-200 hover:scale-105 hover:text-slate-200 dark:bg-myLightGreyBlue dark:text-myDarkBlue hover:dark:text-slate-900"
            >
              View All Tags
            </Button>
          </Link>
        </div>
      </div>

      {/* FEATURED POSTS CONTAINER */}
      <div className="container flex w-full flex-col pt-20">
        <Header title="Featured Posts" />
        <Separator />
        <div className="flex flex-wrap justify-center gap-10">
          {featuredPosts?.length > 0 &&
            featuredPosts?.map((post, index) => {
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

      {/* RECENT POSTS CONTAINER */}
      <div className="container flex w-full flex-col pt-20">
        <Header title="Recent Posts" />
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

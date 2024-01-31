import Header from "@components/reuseable/Header";
import PostCard from "@components/Post/PostCard";
import Separator from "@components/reuseable/Separator";
import { client } from "@sanity/lib/client";
import ContentTypeTab from "@components/ContentTypeTab/ContentTypeTab";
import {
  META_SEO_KEYWORDS,
  META_POST_DESCRIPTION,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import { getAllPostsQuery } from "@sanity/lib/queries";

export const metadata = {
  title: `Posts | ${WEBSITE_NAME}`,
  description: META_POST_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};

export const revalidate = 60;

export default async function Home() {
  const posts = await client.fetch(getAllPostsQuery);

  return (
    <div className="container flex flex-col">
      <Header title="Recent Posts" />
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

import {
  META_SEO_KEYWORDS,
  META_POST_DESCRIPTION,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import { getAllPosts } from "@actions/get-all-posts";

// Dynamic imports
import { Header, PostCard, Separator, ContentTypeTab } from "@components/index";

export const metadata = {
  title: `Posts | ${WEBSITE_NAME}`,
  description: META_POST_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};

export const revalidate = 15;

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="container flex flex-col">
      <Header title="All Posts" />
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

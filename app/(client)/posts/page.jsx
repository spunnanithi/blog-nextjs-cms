import {
  META_SEO_KEYWORDS,
  META_POST_DESCRIPTION,
  WEBSITE_NAME,
} from "@constants/_APP_CONSTANTS";
import { getAllPostsQuery } from "@sanity/lib/queries";
import sanityFetch from "@sanity/lib/sanityFetch";

// Dynamic imports
import { Header, PostCard, Separator, ContentTypeTab } from "@components/index";

export const metadata = {
  title: `Posts | ${WEBSITE_NAME}`,
  description: META_POST_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};

export const revalidate = 15;

const getAllPosts = async () => {
  const posts = await sanityFetch(getAllPostsQuery);

  if (!posts) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }

  return posts;
};

export default async function Home() {
  const posts = await getAllPosts();

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

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

export const metadata = {
  title: `Posts | ${WEBSITE_NAME}`,
  description: META_POST_DESCRIPTION,
  keywords: META_SEO_KEYWORDS,
};

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

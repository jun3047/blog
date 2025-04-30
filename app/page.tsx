import { Metadata } from "next";

import Nav from "@/components/Nav";
// import PostCard from "@/components/post/PostCard";
// import { getPosts } from "@/lib/api";
// import { groupPostsByTag } from "@/lib/utils/post";

export default async function Home() {
  // const posts = await getPosts();
  // const postsByTag = groupPostsByTag(posts);

  return (
    <div className="my-10 flex flex-col">
      <Nav />
      <main className={`mx-10 my-10 md:mx-20 m-transition flex flex-col`}>
        <strong className="text-9xl font-light text-neutral-500">
          Currently Building For <span className="text-neutral-50">Zero</span>{" "}
          People
        </strong>
        <div className="flex justify-between mt-10 items-start text-neutral-500">
          <div id="product">
            <p className="text-3xl">
              by <span className="text-neutral-50">@Immersion</span>
            </p>
          </div>
        </div>
      </main>
      {/* {Object.entries(postsByTag).map(([tag, posts]) => (
        <section key={tag} className="flex flex-col my-8">
          <h3 className={`text-2xl font-medium mx-10 md:mx-20 m-transition`}>
            {tag} 기록
          </h3>
          <div
            className={`flex gap-6 py-5 px-10 md:px-20 overflow-x-scroll scrollbar-hide m-transition`}
          >
            {posts.map(post => (
              <PostCard key={post.slug} post={post} className="min-w-56 w-56" />
            ))}
          </div>
        </section>
      ))} */}
    </div>
  );
}

export const metadata: Metadata = {
  icons: "🎧",
  title: "준",
  description: "정준의 블로그임",
};

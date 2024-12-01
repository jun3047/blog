import { Metadata } from "next";

import { Post, Tag } from "@/@type/post";
import Nav from "@/components/Nav";
import PostCard from "@/components/post/PostCard";
import { getPosts } from "@/lib/api";
import { groupPostsByTag } from "@/lib/utils/post";

export default async function Home() {
  const posts = await getPosts();
  const postsByTag = groupPostsByTag(posts);

  const renderSection = (tag: Tag, _posts: Post[]) => (
    <section className="flex flex-col my-8">
      <h3 className={`text-2xl font-medium mx-10 md:mx-20 m-transition`}>
        {tag} 기록
      </h3>
      <div
        className={`flex gap-6 py-5 px-10 md:px-20 overflow-x-scroll scrollbar-hide m-transition`}
      >
        {_posts.map(post => (
          <PostCard key={post.slug} post={post} className="min-w-56 w-56" />
        ))}
      </div>
    </section>
  );

  return (
    <div className="my-10 flex flex-col">
      <Nav />
      <main className={`mx-10 my-10 md:mx-20 m-transition`}>
        <h1 className="text-6xl mb-5">정준</h1>
        <strong className="text-xl">Frontend Developer</strong>
        <p className="font-light text-xl py-4 leading-8">
          프론트엔드 개발을 합니다. <br />
          사업과 디자인을 좋아합니다. <br />
          사람에 대해 궁금증이 많습니다.
        </p>
      </main>
      {Object.entries(postsByTag).map(([tag, posts]) =>
        renderSection(tag as Tag, posts)
      )}
    </div>
  );
}

export const metadata: Metadata = {
  icons: "🎧",
  title: "준",
  description: "정준의 블로그임",
};

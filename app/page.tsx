import { Metadata } from "next";

import Nav from "@/components/Nav";
import { getPosts } from "@/lib/api";
export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="my-10 flex flex-col">
      <Nav />
      <main className="my-10 mx-20">
        <h1 className="text-6xl mb-5">정준 | JUN</h1>
        <strong className="text-xl">Frontend Developer</strong>
        <p className="font-light text-xl py-4 leading-8">
          우리는 효율적으로 학습하고 있을까요? 정말 최선일까요? <br />
          인터랙티브하고, 인간적이고, 효율적인 학습 서비스를 만들고 있습니다.
        </p>
      </main>
      <section className="flex flex-col mb-4">
        <h3 className="text-2xl font-medium mx-20">공부 기록</h3>
        <div className="flex gap-6 py-5 px-20 overflow-x-scroll scrollbar-hide">
          {posts.map(post => (
            <article
              key={post.title}
              className="bg-black p-8 rounded-2xl min-w-52"
            >
              <p>{post.title}</p>
              <p>{post.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export const metadata: Metadata = {
  icons: "🎧",
  title: "준",
  description: "정준의 블로그임",
};

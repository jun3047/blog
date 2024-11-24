import { format } from "date-fns";
import { Metadata } from "next";
import Link from "next/link";

import Nav from "@/components/Nav";
import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="my-10 flex flex-col">
      <Nav />
      <main className="mx-10 my-10 md:mx-20">
        <h1 className="text-6xl mb-5">정준</h1>
        <strong className="text-xl">Frontend Developer</strong>
        <p className="font-light text-xl py-4 leading-8">
          우리는 효율적으로 학습하고 있을까요? 정말 최선일까요? <br />
          인터랙티브하고, 인간적이고, 효율적인 학습 서비스를 만들고 있습니다.
          <br /> 학습의 효율을 늘리려 빠른 성장을 하는 것에 집중하고 있습니다.
        </p>
      </main>
      <section className="flex flex-col my-8">
        <h3 className="text-2xl font-medium mx-10 md:mx-20">공부 기록</h3>
        <div className="flex gap-6 py-5 px-10 md:px-20 overflow-x-scroll scrollbar-hide">
          {posts.map(post => (
            <article
              key={post.slug}
              className="bg-neutral-900 p-8 rounded-2xl min-w-52"
            >
              <Link href={`/post/${post.slug}`}>
                <p className="underline truncate">
                  <strong>{post.title}</strong>
                </p>
              </Link>
              <p>{post.description}</p>
              <p>{format(post.date, "yy. MM. dd.")}</p>
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

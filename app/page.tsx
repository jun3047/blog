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
          프론트엔드 개발을 합니다. <br />
          사업과 디자인을 좋아합니다.
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
              <Link href={`/post/md/${post.slug}`}>
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

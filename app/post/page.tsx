import { format } from "date-fns";
import Link from "next/link";

import Nav from "@/components/Nav";
import { getPosts } from "@/lib/api";

const page = async () => {
  const posts = await getPosts();

  return (
    <>
      <Nav />
      <div className="mx-10 my-20 md:m-20 m-transition">
        <h2 className="text-4xl mb-10">Post</h2>
        <div className="flex flex-wrap gap-4">
          {posts.map(post => (
            <div
              key={post.slug}
              className="border-gray px-4 py-6 bg-neutral-900 rounded-2xl w-[calc(100%/3-15px)] md:w-[calc(100%/4-20px)] m-transition"
            >
              <Link href={`post/md/${post.slug}`} key={post.slug}>
                <p className="underline truncate">
                  <strong>{post.title}</strong>
                </p>
              </Link>
              <p>{post.description}</p>
              <p>{format(post.date, "yy. MM. dd.")}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

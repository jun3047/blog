import Link from "next/link";

import Nav from "@/components/Nav";
import { getPosts } from "@/lib/api";

const page = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col m-20 gap-4 md:m-10">
      <Nav />
      {posts.map(post => (
        <div
          key={post.slug}
          className="border-gray px-4 py-6 bg-neutral-900 rounded-2xl"
        >
          <Link href={`post/${post.slug}`} key={post.slug}>
            {post.title}
          </Link>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
};

export default page;

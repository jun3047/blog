import Link from "next/link";

import Nav from "@/components/Nav";
import { getPosts } from "@/lib/api";

const page = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col m-10">
      <Nav />
      {posts.map(post => (
        <Link
          className="p-4 border-gray"
          href={`post/${post.slug}`}
          key={post.title}
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default page;

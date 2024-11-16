import Link from "next/link";

import { getPosts } from "@/lib/api";

const page = async () => {
  const posts = await getPosts();

  return (
    <div className="flex flex-col m-10">
      {posts.map(post => (
        <Link
          className="p-4 border-gray"
          href={`blog/${post.slug}`}
          key={post.title}
        >
          {post.title}
        </Link>
      ))}
    </div>
  );
};

export default page;

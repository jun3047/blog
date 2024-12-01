import Nav from "@/components/Nav";
import PostCard from "@/components/post/PostCard";
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
            <PostCard
              key={post.slug}
              post={post}
              className="w-[calc(100%/2-15px)] xl:w-[calc(100%/4-20px)] md:w-[calc(100%/3-15px)] m-transition"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default page;

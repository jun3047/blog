import { format } from "date-fns";
import Link from "next/link";

import { Post } from "@/lib/type/post";

interface PostCardProps extends React.ComponentPropsWithoutRef<"article"> {
  post: Post;
}

const PostCard = ({ post, className, ...props }: PostCardProps) => {
  return (
    <article
      key={post.slug}
      className={`bg-neutral-900 text-neutral-300 p-8 rounded-2xl ${className}`}
      {...props}
    >
      <Link href={`/post/md/${post.slug}`}>
        <h2 className="text-lg line-clamp-1">
          <strong className="text-neutral-50">{post.title}</strong>
        </h2>
      </Link>
      <p className="line-clamp-2 break-words text-sm">{post.description}</p>
      <p className="mt-2">{format(new Date(post.date), "yy. MM. dd.")}</p>
      <ul className="flex gap-4 flex-wrap mt-6 justify-end">
        {post.tags.map(tag => (
          <li className="text-sm font-bold inline m-0" key={tag}>
            #{tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PostCard;

import { format } from "date-fns";
import Link from "next/link";

import { Post } from "@/@type/post";

interface PostCardProps extends React.ComponentPropsWithoutRef<"article"> {
  post: Post;
}

const PostCard = ({ post, className, ...props }: PostCardProps) => {
  return (
    <article
      key={post.slug}
      className={`bg-neutral-900 p-8 rounded-2xl ${className}`}
      {...props}
    >
      <Link href={`/post/md/${post.slug}`}>
        <h2 className="underline text-lg line-clamp-1">
          <strong>{post.title}</strong>
        </h2>
      </Link>
      <p className="line-clamp-2 break-words">{post.description}</p>
      <p>{format(post.date, "yy. MM. dd.")}</p>
      <ul className="flex gap-4 flex-wrap mt-2">
        {post.tags.map(tag => (
          <li
            className="bg-red-500 py-1 px-2 rounded-md text-sm font-bold"
            key={tag}
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default PostCard;

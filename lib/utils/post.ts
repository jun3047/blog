import { Post, Tag } from "@/@type/post";

type PostsByTag = Partial<Record<Tag, Post[]>>;

export const groupPostsByTag = (posts: Post[]): PostsByTag => {
  return posts.reduce((acc: PostsByTag, cur) => {
    if (!acc[cur.tag]) acc[cur.tag] = [cur];
    else acc[cur.tag]?.push(cur);
    return acc;
  }, {});
};

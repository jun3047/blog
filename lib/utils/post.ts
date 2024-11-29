import { Post, Tag } from "@/@type/post";

const etcTag = "작성 중인";

type PostsByTag = Partial<Record<Tag, Post[]>> & {
  [key in typeof etcTag]?: Post[];
};

export const groupPostsByTag = (
  posts: Post[],
  displayTags: Tag[] = ["프론트엔드", "사업", "디자인"]
): PostsByTag => {
  return posts.reduce((acc: PostsByTag, cur) => {
    const primaryTag = displayTags.find(tag => cur.tags.includes(tag));

    if (primaryTag) {
      if (!acc[primaryTag]) acc[primaryTag] = [cur];
      else acc[primaryTag]?.push(cur);
    } else {
      // "기타" 그룹에 추가
      if (!acc[etcTag]) acc[etcTag] = [cur];
      else acc[etcTag]?.push(cur);
    }

    return acc;
  }, {});
};

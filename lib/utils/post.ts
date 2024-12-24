import { Post, Tag } from "@/lib/type/post";

const etcTag = "작성 중인";
const TAG_ORDER = ["뇌과학", "프론트엔드"] as Tag[]; // "사람", "사업"

type PostsByTag = Partial<Record<Tag, Post[]>> & {
  [key in typeof etcTag]?: Post[];
};

export const groupPostsByTag = (
  posts: Post[],
  displayTags: Tag[] = TAG_ORDER
): PostsByTag => {
  // 초기 객체를 displayTags 순서대로 설정
  const initialAcc: PostsByTag = displayTags.reduce(
    (acc, tag) => ({ ...acc, [tag]: [] }),
    {}
  );

  return posts.reduce((acc, cur) => {
    const primaryTag = displayTags.find(tag => cur.tags.includes(tag));

    if (primaryTag) {
      acc[primaryTag]?.push(cur);
    } else {
      if (!acc[etcTag]) {
        acc[etcTag] = [cur];
      } else {
        acc[etcTag]?.push(cur);
      }
    }

    return acc;
  }, initialAcc);
};

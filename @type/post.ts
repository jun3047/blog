export type Tag =
  | "프론트엔드"
  | "학습"
  | "사람"
  | "사업"
  | "디자인"
  | "인터렉션";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; //ISO
  image: string;
  tags: Tag[];
};

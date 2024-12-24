export type Tag =
  | "프론트엔드"
  | "디자인"
  | "인터렉션"
  | "사업"
  | "사람"
  | "학습"
  | "뇌과학";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; //ISO
  image: string;
  tags: Tag[];
};

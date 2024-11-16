export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; //ISO
  image: string;
  tags: Tag[];
};

export type Tag = "CS";

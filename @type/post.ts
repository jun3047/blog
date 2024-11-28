export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; //ISO
  image: string;
  tag: Tag;
};

export type Tag = "CS" | "STARTUP" | "DESIGN";

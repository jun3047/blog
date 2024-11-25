import { readdir } from "fs/promises";
import path from "path";

import { Post } from "@/@types/post";

export async function getPosts(): Promise<Post[]> {
  const postPath = path.resolve(process.cwd(), "app", "post", "(posts)", "md");

  const slugs = (await readdir(postPath, { withFileTypes: true })).filter(
    dirent => dirent.isDirectory()
  );

  const posts = await Promise.all(
    slugs.map(async ({ name }) => {
      const { metadata } = await import(
        `../app/post/(posts)/md/${name}/page.mdx`
      );
      return { slug: name, ...metadata };
    })
  );

  posts.sort((a, b) => +new Date(b.publishDate) - +new Date(a.publishDate));

  return posts;
}

import { prisma } from "./conn";
import { Post, postQuery } from "./types";

export async function all(): Promise<Post[]> {
  return await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    ...postQuery,
  });
}

export async function byId(id: number): Promise<Post | null> {
  return await prisma.post.findUnique({
    where: { id },
    ...postQuery,
  });
}

export async function byTag(name: string): Promise<Post[]> {
  return await prisma.post.findMany({
    where: { tags: { some: { name } } },
    orderBy: { createdAt: "desc" },
    ...postQuery,
  });
}

export function noAuthor(post: Post): Omit<Post, "authorId"> {
  delete post.authorId;
  return post;
}

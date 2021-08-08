import { prisma } from "./conn";

export async function all(): Promise<string[]> {
  const tags = await prisma.tag.findMany();
  return tags.map((tag) => tag.name);
}

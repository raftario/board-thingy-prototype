import { Prisma } from "@prisma/client";

export const postQuery = {
  include: { tags: true },
};
const post = Prisma.validator<Prisma.PostArgs>()(postQuery);
export type Post = Prisma.PostGetPayload<typeof post>;

import type { Role, User } from "@prisma/client";

import { prisma } from "./conn";

export async function all(): Promise<User[]> {
  return await prisma.user.findMany();
}

export async function count(): Promise<number> {
  return await prisma.user.count();
}

export async function setRole(id: string, role: Role): Promise<void> {
  await prisma.user.update({ where: { id }, data: { role } });
}

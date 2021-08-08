import NextAuth, { Session } from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Role, User } from "@prisma/client";

import * as users from "../../../models/users";
import { prisma } from "../../../models/conn";

export default NextAuth({
  providers: [
    Providers.Discord({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session: sessionCallback,
  },
  events: {
    createUser: onCreateUser,
  },
});

async function sessionCallback(session: Session, user: User) {
  return { ...session, info: { id: user.id, role: user.role } };
}

async function onCreateUser(user: User) {
  if ((await users.count()) > 1) {
    return;
  }

  await users.setRole(user.id, Role.ADMIN);
}

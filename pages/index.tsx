import React, { FunctionComponent } from "react";
import { signIn, useSession } from "next-auth/client";
import { Button, Card, Main, Spinner } from "grommet";
import type { Role } from "@prisma/client";
import type { Session } from "next-auth";
import type { GetServerSideProps } from "next";

import * as posts from "../models/posts";
import * as Types from "../models/types";
import Post from "../components/post";

export type Info = { id: string; role: Role };
type CustomSession = Session & { info?: Info };

export function useInfo(): [info: Info, loading: boolean] {
  const [session, loading] = useSession();
  const info = (session as CustomSession)?.info;
  return info ? [info, loading] : [undefined, loading];
}

type Props = { posts: Types.Post[] };

export const getServerSideProps: GetServerSideProps<Props> = async () => ({
  props: { posts: await posts.all() },
});

const Index: FunctionComponent<Props> = ({ posts }) => {
  const [info, loading] = useInfo();
  return (
    <Main pad="large" align="center">
      {!info && !loading && (
        <Button primary label="Sign in" onClick={() => signIn()} />
      )}
      {posts.map((post) => (
        <Post post={post} key={post.id} info={info} />
      ))}
    </Main>
  );
};
export default Index;

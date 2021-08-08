import { Role } from ".prisma/client";
import React, { FunctionComponent } from "react";
import { Info } from "..";
import PostEdit from "../../components/post-edit";

type Props = { info: Info };

const NewPost: FunctionComponent<Props> = () => (
  <PostEdit info={{ id: "123", role: Role.ADMIN }} />
);
export default NewPost;

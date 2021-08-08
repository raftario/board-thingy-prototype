import React, { FunctionComponent, useState } from "react";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Main,
  Markdown,
  TextArea,
  TextInput,
} from "grommet";

import * as Types from "../models/types";
import type { Info } from "../pages";

type Props = { post?: Types.Post; info: Info };

const PostEdit: FunctionComponent<Props> = ({ post, info, ...props }) => {
  const [title, setTitle] = useState(post?.title || "");
  const [contents, setContents] = useState(post?.contents || "");

  return (
    <Main pad="large" align="center">
      <Box pad="none" margin="none" direction="row">
        <Card width="large" margin="medium">
          <CardHeader pad="medium">
            <TextInput
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              size="large"
              style={{ fontWeight: "bold" }}
            />
          </CardHeader>
          <CardBody pad="medium">
            <TextArea
              placeholder="Contents"
              value={contents}
              onChange={(e) => setContents(e.target.value)}
              size="medium"
              resize="vertical"
              fill
            />
          </CardBody>
        </Card>

        <Card width="large" margin="medium">
          <CardHeader pad="medium">
            <Heading level="2" margin="none">
              {title}
            </Heading>
          </CardHeader>
          <CardBody pad="medium">
            <Markdown>{contents}</Markdown>
          </CardBody>
        </Card>
      </Box>
    </Main>
  );
};
export default PostEdit;

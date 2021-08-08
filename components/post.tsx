import React, { FunctionComponent } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Markdown,
  Text,
} from "grommet";
import * as dates from "date-fns";

import * as Types from "../models/types";
import type { Info } from "../pages";

type Props = { post: Types.Post; info?: Info };

const Post: FunctionComponent<Props> = ({ post, info, ...props }) => (
  <Card width="large" margin="medium">
    <CardHeader pad="medium">
      <Heading level="2" margin="none">
        {post.title}
      </Heading>
    </CardHeader>
    <CardBody pad="medium">
      <Markdown>{post.contents}</Markdown>
    </CardBody>
    <CardFooter pad="medium" align="stretch">
      <Text>{formatDates(post.createdAt, post.updatedAt)}</Text>
    </CardFooter>
  </Card>
);
export default Post;

function formatDate(date: Date): string {
  const daysBeforeNow = dates.differenceInDays(Date.now(), date);
  if (daysBeforeNow == 0) {
    return `${dates.formatDistanceToNow(date)} ago`;
  } else if (daysBeforeNow == 1) {
    return "yesterday";
  } else if (daysBeforeNow < 7) {
    return `${daysBeforeNow} days ago`;
  } else {
    return dates.format(date, "yyyy-MM-dd");
  }
}

function formatDates(created: Date, updated: Date): string {
  return dates.differenceInMinutes(updated, created) == 0
    ? `Published ${formatDate(created)}`
    : `Published ${formatDate(created)} - Updated ${formatDate(updated)}`;
}

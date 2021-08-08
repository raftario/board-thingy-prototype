import status from "statuses";
import { NextApiHandler } from "next";

import * as posts from "../../models/posts";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const data = await posts.all();
    res.status(200).json(data.map(posts.noAuthor));
    return;
  }

  res.status(404).send(status(404));
};
export default handler;

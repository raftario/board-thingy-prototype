import status from "statuses";
import { NextApiHandler } from "next";

import * as posts from "../../../models/posts";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const name = req.query.name.toString();
    const data = await posts.byTag(name);
    if (data) {
      res.status(200).json(data.map(posts.noAuthor));
      return;
    }
  }

  res.status(404).send(status(404));
};
export default handler;

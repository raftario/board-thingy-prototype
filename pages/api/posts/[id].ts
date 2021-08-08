import status from "statuses";
import { NextApiHandler } from "next";

import * as posts from "../../../models/posts";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const id = Number.parseInt(req.query.id.toString());
    if (Number.isSafeInteger(id)) {
      const data = await posts.byId(id);
      if (data) {
        res.status(200).json(posts.noAuthor(data));
        return;
      }
    }
  }

  res.status(404).send(status(404));
};
export default handler;

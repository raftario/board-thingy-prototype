import status from "statuses";
import { NextApiHandler } from "next";

import * as tags from "../../models/tags";

const handler: NextApiHandler = async (req, res) => {
  if (req.method === "GET") {
    const data = await tags.all();
    res.status(200).json(data);
    return;
  }

  res.status(404).send(status(404));
};
export default handler;

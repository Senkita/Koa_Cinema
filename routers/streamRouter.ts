import { createReadStream } from "node:fs";
import { resolve } from "node:path";

const Router = require("koa-router");
const streamRouter = new Router();

streamRouter.get("/:name", async (ctx: any) => {
  const videoPath = resolve("/opt/Downloads/", ctx.params.name);
  const readStream = createReadStream(videoPath);

  ctx.body = readStream;
});

export default streamRouter;

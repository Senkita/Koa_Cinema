import { readdir } from "node:fs/promises";
import { extname } from "node:path";

const Router = require("koa-router");
const apiRouter = new Router();
apiRouter.get("/", async (ctx:any) => {
  const videoList: Array<string> = [];
  const videoTypeList: Array<string> = ["mp4", "mkv"];

  try {
    const files = await readdir("/opt/Downloads");

    files.forEach((file) => {
      const fileExtName: string = extname(file).slice(1);

      if (videoTypeList.indexOf(fileExtName) !== -1) {
        videoList.push(file);
      }
    });

    ctx.body = JSON.stringify({ videos: videoList });
  } catch (err) {
    ctx.body = err;
  }
});

export default apiRouter;

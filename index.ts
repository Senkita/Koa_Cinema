import router from "./routers";

const Koa = require("koa");
const app = new Koa();

app.use(async (ctx: any, next: any) => {
  ctx.set("Access-Control-Allow-Origin", "*");
  await next();
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(2333);

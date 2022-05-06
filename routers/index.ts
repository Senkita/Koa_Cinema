import apiRouter from "./apiRouter";
import streamRouter from "./streamRouter";

const Router = require("koa-router");
const router = new Router();

router.use("/api", apiRouter.routes(), apiRouter.allowedMethods());
router.use("/stream", streamRouter.routes(), streamRouter.allowedMethods());

export default router;

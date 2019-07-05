import { Request, Response, Router } from "express";
import createError from "http-errors";

const homeRouter = Router();

homeRouter.get("/", (req: Request, res: Response, next) => {
  next(createError(500));
});

export default homeRouter;

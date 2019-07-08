import { Request, Response, Router } from "express";
import createError from "http-errors";
import UserController from "../controllers/user";

const userRouter = Router();

userRouter.get("/:id", async (req: Request, res: Response, next) => {
  try {
    const user = await UserController.GetUserByObjectId({
      _id: req.params.id,
    });

    return res.send({ user });
  } catch (error) {
    createError(500);
    next(error);
  }
});

userRouter.post("/", async (req: Request, res: Response, next) => {
  try {
    const user = await UserController.CreateUser({
      age: parseInt(req.body.age, 10),
      id: req.body.id,
      password: req.body.password,
    });

    return res.send({ user });
  } catch (error) {
    createError(500);
    next(error);
  }
});

userRouter.delete("/:id", async (req: Request, res: Response, next) => {
  try {
    const user = await UserController.DeleteUserByObjectId({
      _id: req.params.id,
    });

    return res.send({ user });
  } catch (error) {
    createError(500);
    next(error);
  }
});

userRouter.put("/:id", async (req: Request, res: Response, next) => {
  try {
    const user = await UserController.PutUserByObjectId({
      _id: req.params.id,
      age: req.body.age,
      id: req.body.id,
      password: req.body.password,
    });

    return res.send({ user });
  } catch (error) {
    createError(500);
    next(error);
  }
});

export default userRouter;

import { Request, Response, NextFunction, Router } from 'express';
import createError from 'http-errors';
import bcrypt from 'bcrypt';
import { isNotLoggedIn, isLoggedIn } from '../middlewares/auth';
import userController from '../controllers/user';
import passport = require('passport');

const authRouter = Router();

authRouter.get('/signup', isNotLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
  try {
    return res.render('signup');
  } catch (error) {
    next(createError(404));
  }
});

authRouter.post('/signup', isNotLoggedIn,  async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  try {
    const exUser = await userController.GetUserByQuery({ email });
    if (exUser) {
      return res.send({message: '이미 가입된 이메일입니다.'});
    }
    const hash = await bcrypt.hash(password, 12);
    await userController.CreateUser({ email, password: hash});
    return res.redirect('/');
  } catch (error) {
    next(createError(409));
  }
});

authRouter.post('/signin', isNotLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('local', (authError, user, info) => {
    if (authError) {
      return next(authError);
    }
    if (!user) {
      return res.send({ message: '일치하는 정보가 없습니다.'});
    }
    return req.login(user, (loginError) => {
      if (loginError) {
        return next(loginError);
      } else {
        return res.redirect('/');
      }
    });
  })(req, res, next);
});

authRouter.post('/signout', isLoggedIn, (req, res, next) => {
  try {
    req.logout();
    req.session.destroy((err) => next(err));
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

export default authRouter;

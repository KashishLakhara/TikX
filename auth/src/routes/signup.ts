import express, {Request, Response} from 'express';

const router = express.Router();

router.get("/api/users/signup", (req: Request, res: Response) => {
  res.send("hii there SignUp..!");
});

export { router as signupRouter };

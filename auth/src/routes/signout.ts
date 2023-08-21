import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";

const router = express.Router();

router.post("/api/users/signout", 
[
    body('email').isEmail().withMessage('must be a valid email'),
    body('password').trim().isLength({min:4, max:20}).withMessage('must be between 4 and 20 characters')
],
(req: Request, res: Response) => {
    const err = validationResult(req);

    if(!err.isEmpty()){
        return res.status(400).send(err.array());
    }  

    const { email, password } = req.body;
    res.json({ email, password });
}


);

export { router as signoutRouter };

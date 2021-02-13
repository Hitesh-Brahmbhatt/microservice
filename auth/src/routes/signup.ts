import express, { Request, Response} from 'express';
import { body, check,  validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
 
import { RequestValidationError } from '../errors/request-validation-error';
import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post('https://api.thedogapi.com/v1/breeds/search/:dog', [
    check('dog')
      .trim()
      .withMessage('Should not be empty')
  ], 
  validateRequest
//   async (req: Request, res: Response) => {
//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//       throw new RequestValidationError(errors.array());
//     }

//     const { email, password } = req.body;

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//      throw new BadRequestError('Email in use');
//     }

//     const user = User.build({ email, password });
//     await user.save();

//     // Generate json web token 
//     const userJwt = jwt.sign({
//       id: user.id,
//       email: user.email
//     }, 'abcd');

//     //Store it on session object
//     req.session = {
//       jwt: userJwt
//     };

//     res.status(201).send(user);

// }
);

export { router as signupRouter };
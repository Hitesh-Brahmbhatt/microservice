import express, { Request, Response, NextFunction} from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
 
import { RequestValidationError } from '../errors/request-validation-error';
import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';

export const validateRequest =  async (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }

  return next();
  // const { email, password } = req.body;

  // const existingUser = await User.findOne({ email });

  // if (existingUser) {
  //  throw new BadRequestError('Email in use');
  // }
};

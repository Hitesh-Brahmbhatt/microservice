import express, { Request, Response, NextFunction} from 'express';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
 
import { RequestValidationError } from '../errors/request-validation-error';
import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';

export const getBreedGroupInformation =  async (req: Request, res: Response, next: NextFunction) => {
 // define some variables here

 try {

 } catch (e)
 {
   return next(e);
 }};

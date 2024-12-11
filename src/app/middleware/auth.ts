import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { userModel } from "../modules/user/user.model";
import catchAsync from "../utils/catchAsync";
import AppError from "../error/AppError";
import { UserRole } from "../modules/user/user.constant";

const auth = (...requiredRoles: UserRole[]) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    // Check if Authorization header is missing or not in Bearer format
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // Extract token from the header
    const token = authHeader.split(" ")[1];

    // Verify the provided token
    const decoded = jwt.verify(
      token,
      config.jwt_secret as string
    ) as JwtPayload;

    const { role, email } = decoded;

    // Check if the user exists in the database
    const user = await userModel.findOne({ email });

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, "This user is not found!");
    }

    // Check if the user has the required role
    if (requiredRoles.length > 0 && !requiredRoles.includes(role)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // Attach decoded user info to the request object
    req.user = decoded;

    next();
  });
};

export default auth;

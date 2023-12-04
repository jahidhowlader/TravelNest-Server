import jwt from "jsonwebtoken";
import { createError } from "./error.js";

export const verifyToken = (req, res, next) => {

  const token = req.cookies.access_token;
  console.log('token', token);

  if (!token) {
    return next(createError(401, "You are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {

    if (err) return next(createError(403, "Token is not valid!"));

    console.log(16, user);

    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {

  // console.log(25, req);

  verifyToken(req, res, () => {
    console.log(28, req.user);

    if (req.user.email === req.params.email || req.user.isAdmin) {
      next();

    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};

export const verifyAdmin = (req, res, next) => {

  verifyToken(req, res, () => {

    if (req.user.isAdmin) {
      next();

    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
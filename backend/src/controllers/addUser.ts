import { RequestHandler } from "express";
import { CommonResponseBody } from "..";
import { RequestBody, users } from "../models/user";

export default <RequestHandler<unknown, CommonResponseBody, RequestBody>>((
  req,
  res
) => {
  users.push(req.body);
  res.status(201).send({
    data: users,
  });
});

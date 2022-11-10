import { RequestHandler } from "express";
import { CommonResponseBody } from "..";
import { users } from "../models/user";

export default <RequestHandler<unknown, CommonResponseBody>>((req, res) => {
  res.send({
    data: users,
  });
});

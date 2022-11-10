import { RequestHandler } from "express";
import { CommonResponseBody } from "..";
import { RequestParams, users } from "../models/user";

export default <RequestHandler<RequestParams, CommonResponseBody>>((
  req,
  res
) => {
  const id = Number(req.params.id);
  users.splice(id - 1, 1);
  res.status(201).send({
    data: users,
  });
});

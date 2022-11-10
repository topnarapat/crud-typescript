import { RequestHandler } from "express";
import { CommonResponseBody } from "..";
import { RequestParams, users } from "../models/user";

export default <RequestHandler<RequestParams, CommonResponseBody>>((req, res) => {
  const id = Number(req.params.id);
  const user = users[id - 1];
  res.send({
    data: user,
  });
});

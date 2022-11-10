import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import getUsers from "./controllers/getUsers";
import addUser from "./controllers/addUser";
import deleteUser from "./controllers/deleteUser";
import getUser from "./controllers/getUser";

export interface CommonResponseBody {
  data?: any;
}

dotenv.config();

const app: Application = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Home Page</h1>");
});

app.get("/users", getUsers);
app.get("/users/:id", getUser);
app.post("/users", addUser);
app.delete("/users/:id", deleteUser);

app.use((req: Request, res: Response) => {
  res.status(404).send("<h1>404 Not Found</h1>");
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }
  res
    .status(err.status ?? 500)
    .send(`<h1>${err.message ?? "Something wrong"}</h1>`);
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => {
  console.log(`App listening http://localhost:${port}/`);
});

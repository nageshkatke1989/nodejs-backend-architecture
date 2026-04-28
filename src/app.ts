import express from "express";
import { Request, Response } from "express";
import apiGateway from "./shared/apiGateway/http/user/routes";
import { errorHandler } from "./shared/errors/ErrorHandler";

const app = express();

app.use(express.json());
app.use("/v1/api", apiGateway);

app.get('/', (req: Request, res: Response) => {
  res.json({ message: `APIs running successfully.` });
});

app.use(errorHandler);

export default app;
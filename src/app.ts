import express from "express";
import { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.json({ message: `APIs running successfully.` });
});

export default app;
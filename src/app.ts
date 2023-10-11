// const express = require("express"); // this is ok for js environment
import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";

import todoRoutes from "./routes/todo";

const app = express();

app.use(json());
app.use("/todos", todoRoutes);

// Regular middleware function for err handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3000);

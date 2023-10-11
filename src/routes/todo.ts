import { Router } from "express";

const router = Router();

import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todos";

router.get("/", getTodos);
router.post("/", createTodo);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;

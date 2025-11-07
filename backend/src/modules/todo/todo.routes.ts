import { Router } from "express";
import { TodoService } from "./todo.service";

const router = Router();
const todoService = new TodoService();

router.get('/', async (req, res) => {
  try {
    const todos = await todoService.getAll();
    res.json(todos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
    try {   
        const todo = await todoService.getById(id);
        res.json(todo);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }   
});

export default Router
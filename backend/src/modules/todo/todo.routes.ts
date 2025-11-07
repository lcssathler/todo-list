import { Router } from "express";
import { TodoService } from "./todo.service.ts";

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

router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const todo = await todoService.create(title);
    res.status(201).json(todo);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

router.put('/:id/toggle', async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const todo = await todoService.toggleComplete(id);
    res.json(todo);
  } catch (error: any) {
    res.status(404).json({ error: error.message });
  }
});   

router.put('/:id', async (req, res) => {   
  try {
    const id = parseInt(req.params.id, 10);
    const data = req.body;
    const todo = await todoService.update(id, data);
    res.json(todo);
  } catch (error: any) {  
    res.status(500).json({ error: error.message });
  }
});

export default router
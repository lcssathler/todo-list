import express from 'express';
import cors from 'cors';
import todoRoutes from './modules/todo/todo.routes.ts';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);
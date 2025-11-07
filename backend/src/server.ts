import express from 'express';
import cors from 'cors';
import todoRoutes from './modules/todo/todo.routes.ts';
import { prisma } from './database/prisma.config.ts';
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

prisma.$connect()
  .then(() => {
    app.listen(() => {
      console.log(`Running server on 3000 port`);
    });
  })
  .catch((error: any) => {
    console.error('Connection to prisma error: ', error.message);
    process.exit(1);
  });
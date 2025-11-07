import express from 'express';
import cors from 'cors';
import todoRoutes from './modules/todo/todo.routes.ts';
import { prisma } from './database/prisma.config.ts';

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

app.use(cors());
app.use(express.json());
app.use('/api/todos', todoRoutes);

app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

async function startServer() {
  try {
    await prisma.$connect();
    console.log('Prisma connection ok');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });

    process.on('SIGTERM', async () => {
      await prisma.$disconnect();
      process.exit(0);
    });
  } catch (error: any) {
    console.error('Failed to connect to Prisma:', error.message);
    process.exit(1);
  }
}

startServer();
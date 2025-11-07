import { prisma } from "../../database/prisma.config.ts";
import { Todo } from "../../types/index.ts";
export class TodoRepository {

  async findAll(): Promise<Todo[]> {
    return prisma.todo.findMany();
  }

  async findById(id: number): Promise<Todo | null> {
    return prisma.todo.findUnique({ 
        where: { id } 
    });
  }

  async create(data: Omit<Todo, 'id' | 'createdAt'>): Promise<Todo> {
    return prisma.todo.create({ data });
  }
}

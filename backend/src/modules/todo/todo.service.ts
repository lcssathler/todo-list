import { TodoRepository } from "./todo.repository.ts";
import { Todo } from "../../types/index.ts";
export class TodoService {
  private repository = new TodoRepository();

  async getAll(): Promise<Todo[]> {
    return this.repository.findAll();
  }

  async getById(id: number): Promise<Todo | null> {
    return this.repository.findById(id);
  }

  async create(title: string): Promise<Todo> {
    if (!title) {
      throw new Error('Title required');
    }
    return this.repository.create({
      title: title.trim(),
      completed: false,
    });
  }

  async toggleComplete(id: number): Promise<Todo> {
    const todo = await this.repository.findById(id);
    if (!todo) throw new Error('To Do not found');
    return this.repository.update(id, { completed: !todo.completed }) as Promise<Todo>;
  }
}

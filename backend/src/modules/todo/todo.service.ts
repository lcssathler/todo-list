import { TodoRepository } from "./todo.repository.ts";
import { Todo } from "./todo.model.ts";
export class TodoService {
  private repository = new TodoRepository();

  async getAll(): Promise<Todo[]> {
    return this.repository.findAll();
  }

  async getById(id: number): Promise<Todo | null> {
    return this.repository.findById(id);
  }
}

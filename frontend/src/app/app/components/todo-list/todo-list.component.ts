import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { CommonModule, NgFor } from '@angular/common';
import { TodoFormComponent } from "../todo-form/todo-form.component";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [TodoFormComponent, CommonModule, NgFor],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe({
      next: (data) => this.todos = data,
      error: (err) => console.error('Error loading To Dos', err)
    });
  }

  toggle(id: number): void {
    this.todoService.toggleTodo(id).subscribe({
      next: () => this.loadTodos(),
      error: (err) => console.error('Error changing checked', err)
    });
  }

  delete(id: number) {
    this.todoService.deleteTodo(id).subscribe({
      next: () => this.loadTodos(),
      error: (err) => console.error('Error deleting To Do', err)
    });
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule, MatIconModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  title = '';

  @Output() todoCreated = new EventEmitter<void>();

  constructor(private todoService: TodoService) {}

  create(): void {
    if (!this.title.trim()) return;
    this.todoService.createTodo(this.title.trim()).subscribe({
      next: () => {
        this.title = '';
        this.todoCreated.emit();
      },
      error: (err) => console.error('Error creating new task:', err)
    });
  }
}

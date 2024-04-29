import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


 

@Component({
  standalone:true,
  imports:[FormsModule],
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() task: any;
  @Output() delete = new EventEmitter<void>();

  onComplete(): void {
    this.task.completed = !this.task.completed;
  }

  onDelete(): void {
    this.delete.emit();
  }
}

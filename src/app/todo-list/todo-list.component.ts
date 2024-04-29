import { Component, OnInit } from '@angular/core';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';


interface Task {
  text: string;
  completed: boolean;
  state: string;
 }

@Component({
  standalone:true,
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  imports: [TodoItemComponent,FormsModule,CommonModule],
  animations: [
    trigger('strikeThrough', [
       state('inactive', style({
         textDecoration: 'none'
       })),
       state('active', style({
         textDecoration: 'line-through'
       })),
       transition('inactive => active', animate('100ms ease-in')),
       transition('active => inactive', animate('100ms ease-out'))
     ])
   ]
   
})
export class TodoListComponent implements OnInit {
  tasks: Task[] = [];
  newTaskText = '';


  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

 addTask(): void {
 if (this.newTaskText.trim().length > 0) {
    const newTask = {
      text: this.newTaskText,
      completed: false,
      state: 'inactive'
    };

    this.tasks.push(newTask);
    this.newTaskText = ''; 
 }
}


  completeTask(task: any): void {
    task.completed = true;
  }

  deleteTask(index: number, event: MouseEvent): void {
    if ((event.target as HTMLElement).tagName === 'INPUT') {
       this.tasks[index].completed = !this.tasks[index].completed;
    } else {
       this.tasks[index].state = 'active'; 
       setTimeout(() => {
         this.tasks.splice(index, 1); 
       }, 800); 
    }
   }
   
   
}

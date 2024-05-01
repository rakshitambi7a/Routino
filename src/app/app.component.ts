import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthService } from './auth.service'; // Adjust the import path as necessary
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,TodoListComponent,LoginFormComponent,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-todo-app';
  constructor(public authService: AuthService) {}
  login() {
    // Authentication logic here
    // On successful login
    this.authService.setLoginStatus(true);
   }

}

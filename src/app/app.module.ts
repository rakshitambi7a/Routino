import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';




import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
 declarations: [],
 imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TodoListComponent,
    TodoItemComponent,
    CommonModule,
    HttpClientModule,
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }

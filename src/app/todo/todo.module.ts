import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule,
    RouterModule.forChild([
      {
        path:'',
        component: TodoComponent,
      },
    ])
  ],
  declarations: [TodoComponent]
})
export class TodoModule { }

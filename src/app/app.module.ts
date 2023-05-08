import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './main/app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'list',
        loadChildren: () =>
          import('./todo/todo.module').then((mod) => mod.TodoModule),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

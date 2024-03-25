import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisualizeComponent } from './components/app/visualize/visualize.component';
import { TodoDetailComponent } from './components/app/todo-detail/todo-detail.component';

const routes: Routes = [
  {
    path: "",
    component: VisualizeComponent,
  },
  {
    path: "todo/:id",
    component: TodoDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

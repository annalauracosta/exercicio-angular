import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task/task-form/task-form.component';
import { ToolNavigatorComponent } from './tool-bar/tool-navigator/tool-navigator.component';
import { TaskListComponent } from './task/task-list/task-list.component';

const routes: Routes = [
  {
    path: 'task-create',
    component: TaskFormComponent,
  },
  {
    path: 'task-list',
    component: TaskListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

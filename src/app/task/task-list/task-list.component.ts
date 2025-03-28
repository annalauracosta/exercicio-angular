import { Router } from '@angular/router';
import { Task } from './../../models/task';
import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  taskList: Task[] = [];
  listVisibility: boolean = true;
  buttonHeader: boolean = true;
  displayedColumns: string[] = [
    'id',
    'description',
    'situation',
    'Action',
    'Category',
  ];
  constructor(private taskService: TaskService, private router: Router) {}
  ngOnInit(): void {
    this.allTasks();
  }
  register(): void {
    this.router.navigate(['/task-create']);
  }

  showList(): void {
    if (this.listVisibility == true && this.buttonHeader == true) {
      this.listVisibility = false;
      this.buttonHeader = false;
    } else {
      this.listVisibility = true;
      this.buttonHeader = true;
    }
  }
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id.toString()).subscribe({
      next: (data: any) => {
        this.allTasks();
        console.log('Task succesfully deleted');
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  allTasks(): void {
    this.taskService.findAllTasks().subscribe({
      next: (data: Task[]) => {
        this.taskList = data;
        console.log(this.taskList);
      },
      error: (err) => {
        console.log('ERROR.');
        console.error(err);
      },
    });
  }
  completeTask(task: Task): void {
    this.taskService.completeTask(task.id.toString()).subscribe({
      next: () => {
        task.situation = true;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
  pendingTaskMark(task: Task): void {
    this.taskService.uncompleteTask(task.id.toString()).subscribe({
      next: () => {
        task.situation = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

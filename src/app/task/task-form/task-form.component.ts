import { Description } from './../../../../node_modules/jackspeak/dist/commonjs/index.d';
import { Group } from './../../../../node_modules/regjsparser/parser.d';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task';
import { TaskService } from './../services/task.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  options: boolean[] = [true, false];
  id: number = 0;
  formGroup: FormGroup;
  categories: String[] = ['Shopping', 'Sports', 'Hobby'];
  constructor(
    private taskService: TaskService,
    private fg: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.formGroup = this.fg.group({
      description: [null, [Validators.required]],
      situation: [false, [Validators.required]],
      category: [null, [Validators.required]],
    });
  }
  cancel(): void {
    this.router.navigate(['/task-list']);
  }

  createTask(message: string) {
    if (this.formGroup.invalid) {
      this.snackBar.open('Please fill out all of mandatory fields!', 'Close', {
        duration: 3000,
        panelClass: ['error-snack'],
      });
      return;
    }
    const newTask: Task = {
      id: this.id,
      description: this.formGroup.value.description,
      situation: this.formGroup.value.situation,
      category: this.formGroup.value.category,
    };

    console.log('Nova Tarefa:', newTask);

    this.taskService.createTask(newTask).subscribe({
      next: () => {
        this.formGroup.reset();
        this.snackBar.open(message, 'fechar', {
          duration: 5000,
        });
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}

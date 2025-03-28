import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  apiURL: string = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  findAllTasks(): Observable<any> {
    return this.http.get(this.apiURL);
  }
  completeTask(idTask: string): Observable<any> {
    return this.http.patch(`${this.apiURL}/${idTask}`, { situation: true });
  }
  uncompleteTask(idTask: string): Observable<any> {
    return this.http.patch(`${this.apiURL}/${idTask}`, { situation: false });
  }
  deleteTask(idTask: string): Observable<any> {
    return this.http.delete(`${this.apiURL}/${idTask}`);
  }
  createTask(newTask: any): Observable<any> {
    const taskNoId: any = {
      description: newTask.description,
      situation: newTask.situation,
      category: newTask.category,
    };
    return this.http.post<any>(this.apiURL, taskNoId);
  }
}

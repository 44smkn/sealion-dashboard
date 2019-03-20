import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from './task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TASKS } from './mock-tasks';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // TODO: read from configuration file
  private tasksUrl = 'http://localhost:8080/api/tasks';

  constructor(private http: HttpClient) { }
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
      .pipe(map(response => {
          response.forEach(e => {
            e.deadline = new Date(e.deadline);
          });
          return response;
        }));
    }
  createTask(): void {

  }
}

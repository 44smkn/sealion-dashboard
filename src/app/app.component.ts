import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TaskDialogComponent } from './task/task-dialog.component';
import { Task } from './task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tasks: Task[];
  days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  category: string;
  name: string;
  doToday: boolean;
  deadline: Date;

  constructor(public dialog: MatDialog, private taskService: TaskService) {}

  createTaskDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '650px',
      data: {name: this.name, category: this.category, doToday: this.doToday, deadline: this.deadline}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.taskService.createTask(result);
    });
  }

  updateTaskDialog(task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '650px',
      data: task
    });

    dialogRef.afterClosed().subscribe(result => {
      this.taskService.updateTask(result);
    });
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }
}

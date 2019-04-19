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

  // later, they will be not needed.
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
      this.taskService.createTask(result).subscribe(() => this.getTasks());
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

  getTodayTask(): Task[] {
    return this.tasks.filter(v => v.doToday && !v.archive);
  }

  getSpecifiedTasks(kind: string): Task[] {
    return this.tasks.filter(v => !v.archive && v.category === kind);
  }

  getArchivedTasks(): Task[] {
    return this.tasks.filter(v => v.archive);
  }
}

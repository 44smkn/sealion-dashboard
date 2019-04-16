import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';
import { MatDialog, MatSnackBar } from '@angular/material';
import { TaskService } from '../task.service';
import { TaskDialogComponent } from '../task/task-dialog.component';

@Component({
  selector: 'app-tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input() tasks: Task[];
  @Input() days: string[];
  @Input() todayTask: boolean;
  @Input() archived: boolean;

  @Output() reload = new EventEmitter<boolean>();

  category: string;
  name: string;
  doToday: boolean;
  deadline: Date;

  constructor(private snackBar: MatSnackBar, public dialog: MatDialog, private taskService: TaskService) { }

  ngOnInit() {
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

  changeArchiveStatus(task: Task, archive: boolean): void {
    task.archive = archive;
    this.taskService.updateTask(task).subscribe(() => {
      this.snackBar.open('タスクをアーカイブしました', 'OK', {
        duration: 2000,
      });
      this.reload.next(true);
    });
  }

  changeDoTodayStatus(task: Task, doToday: boolean): void {
    task.doToday = doToday;
    this.taskService.updateTask(task).subscribe(() => {
      this.snackBar.open(doToday ? '今日行うタスクに追加しました' : '今日行うタスクから外しました', 'OK', {
        duration: 2000,
      });
      this.reload.next(true);
    });
  }

  deleteTask(task: Task): void {
    this.taskService.deleteTask(task.id).subscribe( () => {
      this.snackBar.open('タスクを削除しました', 'OK', {
        duration: 2000,
      });
      this.reload.next(true);
    });
  }

}

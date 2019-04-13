import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { MatDialog } from '@angular/material';
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

  category: string;
  name: string;
  doToday: boolean;
  deadline: Date;

  constructor(public dialog: MatDialog, private taskService: TaskService) { }

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

}

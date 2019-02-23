import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Task } from '../task';

@Component({
    selector: 'app-task-dialog',
    templateUrl: 'task-dialog.component.html',
    styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<TaskDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Task) { }
    onNoClick(): void {
        this.dialogRef.close();
    }
    setDeadline(event: MatDatepickerInputEvent<Date>): void {
        this.data.deadline = event.value;
    }
}

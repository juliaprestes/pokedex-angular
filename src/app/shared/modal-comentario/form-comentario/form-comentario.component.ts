import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  comentario: string;
}

@Component({
  selector: 'app-form-comentario',
  templateUrl: './form-comentario.component.html',
  styleUrls: ['./form-comentario.component.scss']
})
export class FormComentarioComponent {
  constructor(
    public dialogRef: MatDialogRef<FormComentarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { }

}

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { FormComentarioComponent } from './form-comentario/form-comentario.component';

export interface DialogData {
  comentario: string;
}

@Component({
  selector: 'app-modal-comentario',
  templateUrl: './modal-comentario.component.html',
  styleUrls: ['./modal-comentario.component.scss']
})
export class ModalComentarioComponent {
  comentario: string = "";

  constructor(private matDialog: MatDialog) { }

  onOpenDialogClick() {
    const dialogRef = this.matDialog.open(FormComentarioComponent, {
      data: { name: this.comentario },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.comentario = result;
    });
  }

  removeComment() {
    this.comentario = "";
  }

}


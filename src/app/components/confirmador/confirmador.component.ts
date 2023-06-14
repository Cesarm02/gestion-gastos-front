import { Component, OnInit, Inject  } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmador',
  templateUrl: './confirmador.component.html',
  styleUrls: ['./confirmador.component.css']
})
export class ConfirmadorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ConfirmadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  closeModal(result: string) {
    this.dialogRef.close(result);
  }

  ngOnInit(): void {
  }

}

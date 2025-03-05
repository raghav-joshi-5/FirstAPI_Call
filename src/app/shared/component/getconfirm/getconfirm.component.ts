import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss'],
})
export class GetconfirmComponent implements OnInit {
  constructor(private _matdialog: MatDialogRef<GetconfirmComponent>) {}

  ngOnInit(): void {}

  onConfirm(arg0: boolean) {
    this._matdialog.close(arg0);
  }
}

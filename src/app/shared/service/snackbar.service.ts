import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _matSnackBar: MatSnackBar) {}

  opensnackbar(massage: string) {
    this._matSnackBar.open(massage, 'close', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: 2500,
    });
  }
}

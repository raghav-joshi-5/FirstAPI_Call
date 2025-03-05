import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

const material = [MatSnackBarModule, CommonModule, MatDialogModule];

@NgModule({
  declarations: [],
  imports: [...material],
  exports: [...material],
})
export class MarerialModule {}

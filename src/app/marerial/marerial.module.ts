import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const material = [MatSnackBarModule, CommonModule];

@NgModule({
  declarations: [],
  imports: [...material],
  exports: [...material],
})
export class MarerialModule {}

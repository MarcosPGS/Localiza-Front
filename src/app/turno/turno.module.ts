import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TurnoComponent } from './turno/turno.component';

@NgModule({
  declarations: [TurnoComponent],
  imports: [
    CommonModule
  ],
  exports:[TurnoComponent],
})
export class TurnoModule { }

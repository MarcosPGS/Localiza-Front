import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiaSemanaComponent } from './dia-semana/dia-semana.component';
import { DiaSemanaService } from './dia-semana.service';

@NgModule({
  declarations: [DiaSemanaComponent],
  imports: [
    CommonModule
  ],
  exports:[DiaSemanaComponent]
})
export class DiaSemanaModule { }

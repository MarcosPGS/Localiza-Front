import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemestreComponent } from './semestre/semestre.component';

@NgModule({
  declarations: [SemestreComponent],
  imports: [
    CommonModule
  ],
  exports:[SemestreComponent],
})
export class SemestreModule { }

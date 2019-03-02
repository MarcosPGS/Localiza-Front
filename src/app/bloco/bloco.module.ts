import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlocoComponent } from './bloco/bloco.component';

@NgModule({
  declarations: [BlocoComponent],
  imports: [
    CommonModule
  ],
  exports:[BlocoComponent]
})
export class BlocoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalaComponent } from './sala/sala.component';

@NgModule({
  declarations: [SalaComponent],
  imports: [
    CommonModule
  ],
  exports:[SalaComponent]
})
export class SalaModule { }

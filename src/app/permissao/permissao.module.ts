import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissaoComponent } from './permissao/permissao.component';

@NgModule({
  declarations: [PermissaoComponent],
  imports: [
    CommonModule
  ],
  exports:[PermissaoComponent]
})
export class PermissaoModule { }

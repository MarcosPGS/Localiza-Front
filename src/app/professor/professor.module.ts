import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorPesquisaComponent } from './professor-pesquisa/professor-pesquisa.component';


import {PanelModule} from 'primeng/panel';

@NgModule({
  declarations: [ProfessorPesquisaComponent, ProfessorFormComponent],
  imports: [
    CommonModule,
    PanelModule
    
  ],
  exports:[ProfessorPesquisaComponent, ProfessorFormComponent ]
})
export class ProfessorModule { }

import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorPesquisaComponent } from './professor-pesquisa/professor-pesquisa.component';




import {PanelModule} from 'primeng/panel';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';

import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [ProfessorPesquisaComponent, ProfessorFormComponent],
  imports: [
    CommonModule,
    PanelModule,
    MultiSelectModule,
    InputTextModule,
    ButtonModule,
    TableModule
    
  ],
  exports:[ProfessorPesquisaComponent, ProfessorFormComponent ]
})
export class ProfessorModule { }

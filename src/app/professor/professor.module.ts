import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfessorRoutingModule } from './professor-routing/professor-routing.module';
import { ProfessorFormComponent } from './professor-form/professor-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorPesquisaComponent } from './professor-pesquisa/professor-pesquisa.component';




import {PanelModule} from 'primeng/panel';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';


import {TableModule} from 'primeng/table';
import { DisciplinaModule } from '../disciplina/disciplina.module';
import { CursoModule } from '../curso/curso.module';

@NgModule({
  declarations: [ProfessorPesquisaComponent, ProfessorFormComponent],
  imports: [
    CommonModule,
    PanelModule,
    MultiSelectModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    ProfessorRoutingModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    DisciplinaModule,
    CursoModule
    
  ],
  exports:[ProfessorPesquisaComponent, ProfessorFormComponent ]
})
export class ProfessorModule { }

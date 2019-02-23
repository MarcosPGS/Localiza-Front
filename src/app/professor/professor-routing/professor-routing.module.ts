import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorPesquisaComponent } from '../professor-pesquisa/professor-pesquisa.component';
import { ProfessorFormComponent } from '../professor-form/professor-form.component';

const routes: Routes = [
  {
  path: 'localiza/pesquisar',
  component: ProfessorPesquisaComponent,
  },

  {
    path: 'formulario',
    component: ProfessorFormComponent,
    }
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)


  ],
  exports:[RouterModule]
})
export class ProfessorRoutingModule { }

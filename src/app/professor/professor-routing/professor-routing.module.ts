import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorPesquisaComponent } from '../professor-pesquisa/professor-pesquisa.component';
import { ProfessorFormComponent } from '../professor-form/professor-form.component';

const routes: Routes = [
  {
  path: '/professor/pesquisar',
  pathMatch: 'full',
  component: ProfessorPesquisaComponent,
  },

  {
    path: '/professor/formulario',
    pathMatch: 'full',
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

import { ProfessorPesquisaComponent } from './../professor/professor-pesquisa/professor-pesquisa.component';
import { AcessoNegadoComponent } from './../acesso-negado/acesso-negado.component';
import { AuthGuard } from './../auth.guard';
import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from '../nao-encontrado/nao-encontrado.component';
import { ProfessorFormComponent } from '../professor/professor-form/professor-form.component';


const routes: Routes = [
  {
  path: 'localiza',
  pathMatch: 'full',
  component: HomeComponent,
  },
  {
    path: 'localiza/pesquisa',
    pathMatch: 'full',
    component: ProfessorPesquisaComponent,
    },
    {
      path: 'localiza/formulario',
      pathMatch: 'full',
      component: ProfessorFormComponent,
      },
  {
    path: 'localiza/professor',
    loadChildren: '../professor/professor.module#ProfessorModule',
    // canActivate:[AuthGuard],
    data:{permissoes:['ROLE_CADASTRAR-PROFESSOR','ROLE_ADMINISTRADORS']}
    },      
    {// está rota sempre precisa fica no final das demasis rotas
      path: 'acesso-negado',
      component: AcessoNegadoComponent,
      },  
    {
      path: '**',
      pathMatch: 'full',
      component:  NaoEncontradoComponent,
      }
]; 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

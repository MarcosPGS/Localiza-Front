import { HomeComponent } from './../home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from '../nao-encontrado/nao-encontrado.component';


const routes: Routes = [
  {
  path: 'localiza',
  pathMatch: 'full',
  component: HomeComponent,
  },

 
    // está rota sempre precisa fica no final das demasis rotas
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

import { DisciplinaService } from './disciplina/disciplina.service';
import { ProfessorService } from './professor/professor.service';
import { CursoService } from './curso/curso.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CursoModule } from './curso/curso.module';
import { ProfessorModule } from './professor/professor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';


import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaoEncontradoComponent,
    AcessoNegadoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    AppRoutingModule,
    ProfessorModule,
    DisciplinaModule,
    CursoModule,

 
    

    
  ],
  providers: [CursoService,ProfessorService,DisciplinaService],
  bootstrap: [AppComponent]
})
export class AppModule { }

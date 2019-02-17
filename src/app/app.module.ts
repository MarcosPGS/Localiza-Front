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


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ProfessorModule,
    DisciplinaModule,
    CursoModule
 
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

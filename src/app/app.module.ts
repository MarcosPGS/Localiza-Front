import { PermissaoService } from './permissao/permissao.service';
import { PermissaoModule } from './permissao/permissao.module';
import { SalaModule } from './sala/sala.module';
import { BlocoService } from './bloco/bloco.service';
import { BlocoModule } from './bloco/bloco.module';
import { TurnoService } from './turno/turno.service';
import { TurnoModule } from './turno/turno.module';
import { SemestreService } from './semestre/semestre.service';
import { DiaSemanaService } from './dia-semana/dia-semana.service';
import { DiaSemanaModule } from './dia-semana/dia-semana.module';
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
import { SemestreModule } from './semestre/semestre.module';
import { SalaService } from './sala/sala.service';


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
    DiaSemanaModule,
    SemestreModule,
    TurnoModule,
    BlocoModule,
    SalaModule,
    PermissaoModule
  ],
  providers: [CursoService,ProfessorService,DisciplinaService,
     DiaSemanaService,SemestreService,TurnoService, BlocoService, SalaService, PermissaoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

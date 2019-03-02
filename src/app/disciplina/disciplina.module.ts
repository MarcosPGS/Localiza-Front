import { HttpClientModule } from '@angular/common/http';
import { CursoModule } from './../curso/curso.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DisciplinaComponent } from './disciplina/disciplina.component';

import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [DisciplinaComponent],
  imports: [
    CommonModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DialogModule,
    BrowserAnimationsModule,
    CursoModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DropdownModule
  ],
  exports:[DisciplinaComponent]
})
export class DisciplinaModule { }

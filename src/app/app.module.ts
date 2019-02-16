import { ProfessorModule } from './professor/professor.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NaoEncontradoComponent
  ],
  imports: [
    BrowserModule,
    ProfessorModule,
    AppRoutingModule
    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

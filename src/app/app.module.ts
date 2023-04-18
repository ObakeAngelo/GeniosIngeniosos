import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './componentes/index/index.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { CampeonatosComponent } from './componentes/campeonatos/campeonatos.component';
import { TraspasosComponent } from './componentes/traspasos/traspasos.component';
import { AgregarJugadorComponent } from './componentes/agregar-jugador/agregar-jugador.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { JugadorService } from './servicios/jugador.service';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    JugadoresComponent,
    CampeonatosComponent,
    TraspasosComponent,
    AgregarJugadorComponent,
    RegisterComponent,
    LoginComponent



  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),



  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [JugadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }

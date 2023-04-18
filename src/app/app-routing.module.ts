import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './componentes/index/index.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { CampeonatosComponent } from './componentes/campeonatos/campeonatos.component';
import { TraspasosComponent } from './componentes/traspasos/traspasos.component';
import { AgregarJugadorComponent } from './componentes/agregar-jugador/agregar-jugador.component';

const routes: Routes = [  
{path: '', component:IndexComponent},
{path: 'login', component:LoginComponent},
{path: 'register', component:RegisterComponent},
{path: 'jugadores', component:JugadoresComponent},
{path: 'campeonatos', component:CampeonatosComponent},
{path: 'traspasos', component:TraspasosComponent},
{path: 'agregarJugador', component:AgregarJugadorComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

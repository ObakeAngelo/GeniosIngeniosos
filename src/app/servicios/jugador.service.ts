import { Injectable } from '@angular/core';
import { Jugador,  } from '../modelos/jugador/jugador.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})


export class JugadorService {



  constructor(
    private firestore : Firestore,

  ) { }












}

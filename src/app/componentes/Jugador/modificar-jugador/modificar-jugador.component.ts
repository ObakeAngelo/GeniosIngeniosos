import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {Firestore, collection, collectionData, doc, updateDoc, getDoc} from '@angular/fire/firestore';

@Component({
  selector: 'app-modificar-jugador',
  templateUrl: './modificar-jugador.component.html',
  styleUrls: ['./modificar-jugador.component.scss'],
})
export class ModificarJugadorComponent {
  public id!: string;
  formulario: FormGroup;
  private firestore: Firestore = inject(Firestore);
  private jugador: any;

  updateId!: any;

  constructor(public router: Router, private activedRoute: ActivatedRoute) {
    this.formulario = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      fotografia: new FormControl(),
      edad: new FormControl(),
      posicion: new FormControl(),
      goles: new FormControl(),
      asistencias: new FormControl(),
      t_amarillas: new FormControl(),
      t_rojas: new FormControl(),
      partidos: new FormControl(),
      equipo_entrada: new FormControl(),
      tipo: new FormControl(),
      sueldo: new FormControl(),
      estado: new FormControl(),
    });
  }

  ngOnInit(): void {
    const heroId = this.activedRoute.snapshot.paramMap.get('id');
    console.log('id', heroId);
    //const jugadoresCollection = collection(this.firestore, 'Jugadores');
    this.jugador = doc(this.firestore, 'Jugadores/' + heroId);
    console.log('jugador', this.jugador);
  }

  resetForm() {
    this.formulario.reset();
  }

  editData(index: any) {
    console.log(this.formulario.value);
    console.log(this.updateId);
    console.log(this.formulario.value);
    const docInstance = doc(this.firestore, 'Jugadores', index);
    updateDoc(docInstance, this.formulario.value);
    this.updateId = index;
    this.resetForm();
  }
}

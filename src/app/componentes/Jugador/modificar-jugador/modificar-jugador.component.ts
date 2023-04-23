
import { Component, inject} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, doc ,  updateDoc, getDoc} from '@angular/fire/firestore';
import { Jugador } from 'src/app/modelos/jugador/jugador.model';

@Component({
  selector: 'app-modificar-jugador',
  templateUrl: './modificar-jugador.component.html',
  styleUrls: ['./modificar-jugador.component.scss']
})
export class ModificarJugadorComponent {
  public id! : string;
  formulario: FormGroup;
  private firestore: Firestore = inject(Firestore);
  userList!: Observable<any>;
  updateId!: any;


  constructor
  (public router: Router,
   private activedRoute : ActivatedRoute)

   {
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

    })
  }


  ngOnInit(): void {

  }


  resetForm() {
    this.formulario.reset();
  }


  editData() {
    console.log(this.formulario.value);
    console.log(this.updateId);
    const docInstance = doc(this.firestore, 'Jugadores', this.updateId);
    updateDoc(docInstance, this.formulario.value);
    this.resetForm();
  }

}

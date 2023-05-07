import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collection, collectionData, deleteDoc, doc, getDocs } from '@angular/fire/firestore';
import { Chart, registerables } from 'node_modules/chart.js';
Chart.register(...registerables)
@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.component.html',
  styleUrls: ['./financiamiento.component.scss']
})
export class FinanciamientoComponent implements OnInit{
  public chart: any;
  private firestore: Firestore = inject(Firestore); // inject Cloud Firestore
  Financiamiento$: Observable<any>;
  


  constructor() {

    const collectionInstance = collection(this.firestore, 'Financiamiento');
    collectionData(collectionInstance, { idField: 'id' }).subscribe(() => {});
    this.Financiamiento$ = collectionData(collectionInstance, { idField: 'id' })
  }


  ngOnInit(): void {
    this.RenderChart()
  }

  RenderChart(){
  const myChart = new Chart("pieChart", {
    type: 'doughnut',
    data: {
      labels: ['Ingreso','Egreso'],
      datasets: [{
        label: '$',
        data: [12, 19],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });    
  }
  
}

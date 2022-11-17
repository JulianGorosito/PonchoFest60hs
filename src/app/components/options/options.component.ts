import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  DatosPrimeraFiesta(){
    //redirigir a la seccion de la primera fiesta (dentro de historia)
  }

  DatosSegundaFiesta(){
    //redirigir a la seccion de la primera fiesta (dentro de historia)
  }
}

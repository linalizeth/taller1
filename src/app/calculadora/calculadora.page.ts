import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {
  operacion=''
  constructor() { }

  ngOnInit() {
  }
  agregar(numero){
    this.operacion += numero
  }
  resultado(){
    this.operacion = eval(this.operacion)
  }

}

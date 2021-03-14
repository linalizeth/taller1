import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
  numero1 = null
  numero2 = null
  operacion = null
  respuesta = null

  constructor() { }

  ngOnInit() {
  }
  
  calcular(){
    if (!isNaN(this.numero1) && !isNaN(this.numero2)){
      if(this.operacion == '+' || this.operacion == '-' || this.operacion == '*' || this.operacion == '/'){
        this.respuesta = `${this.numero1} ${this.operacion} ${this.numero2} es igual a: `
        this.respuesta += eval(`${this.numero1} ${this.operacion} ${this.numero2}`)
      } else {
        this.respuesta = 'La operacion no se puede hacer'  
      }
    } else {
      this.respuesta = 'Digitar numero en los campos "numero"'
    }
  }

}

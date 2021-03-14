import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})

export class SaludoPage implements OnInit {

  nombre = null

  constructor(public alertController:AlertController) { }

  ngOnInit() {
  }

  async saludar() {
    let mensaje = ''

    if (!this.nombre) mensaje = 'escribe tu nombre'
    else mensaje= `hola ${this.nombre}, saludos`

    const alert = await this.alertController.create({
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }

}

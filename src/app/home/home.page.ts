import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

const capitalize = ([ first, ...rest ]) => first.toUpperCase() + rest.join('');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  id = null
  edit = false

  name = null;
  lastName = null;
  phoneNumber = null;
  email = null;

  users = [
    {id: 1, name: "Ever", lastName: "Carvajal", phoneNumber: "3233434343", email: "ever@ever.com"},
    {id: 2, name: "Alejandro", lastName: "Jamioy", phoneNumber: "3209384762", email: "alejo@alejo.com"},
    {id: 3, name: "Lina", lastName: "Maniguaje", phoneNumber: "3102398765", email: "lina@lina.com"}
  ];

  constructor(public alertController:AlertController) {}

  saveData(){
    if (!this.edit){
      this.users.push({
        id : this.id,
        name : capitalize(this.name),
        lastName : capitalize(this.lastName),
        phoneNumber : this.phoneNumber,
        email : this.email
      })
  
      this.id++
    } else {
      for (let i=0; i < this.users.length; i++){
        if (this.users[i].id == this.id) {
          this.users[i].name = this.name,
          this.users[i].lastName = this.lastName,
          this.users[i].phoneNumber = this.phoneNumber,
          this.users[i].email = this.email
          this.edit = false
          break
        }
      }
    }

    this.name = ''
    this.lastName = ''
    this.phoneNumber = ''
    this.email = ''
  }

  deleteUser(index){
    this.users.splice(index, 1)
    this.alertMenssage('Successfully removed')
  }

  async deleteConfirm(id){
    for (let i=0; i < this.users.length; i++){
      if (this.users[i].id == id) {
        let message = `Are you sure you want to delete user ${this.users[i].name} ${this.users[i].lastName}?`

        const alert = await this.alertController.create({
          header: 'delete user ',
          message: message,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
            }, {
              text: 'Okay',
              handler: () => {
                this.deleteUser(i)
              }
            }
          ]
        });
    
        await alert.present();
        break
      }
    }
  }

  async alertMenssage(message) {
    const alert = await this.alertController.create({
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async editForm(id){
    for (let i=0; i < this.users.length; i++){
      if (this.users[i].id == id) {
        await this.alertController.create({
          header: 'Edit User',
          inputs: [
            {name: 'name', type: 'text', placeholder: 'Name', value: this.users[i].name},
            {name: 'lastName', type: 'text', placeholder: 'Last Name', value: this.users[i].lastName},
            {name: 'phoneNumber', type: 'text', placeholder: 'Phone Number', value: this.users[i].phoneNumber},
            {name: 'email', type: 'email', placeholder: 'Email', value: this.users[i].email}
          ],
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            }, 
            {
              text: 'Ok',
              handler: (res) => {
                this.id = id
                this.name = res.name
                this.lastName = res.lastName
                this.phoneNumber = res.phoneNumber
                this.email = res.email
                this.edit = true

                this.saveData()
                this.alertMenssage('Updated successfully.')
              }
            }
          ]
        }).then(res => res.present());

        break
      }
    }
  }
}

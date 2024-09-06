import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa NavController

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  // Variables para almacenar los valores de email y password
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) { } // Inyecta NavController

  ngOnInit() {}

  // Función para manejar el inicio de sesión
  login() {
    // Aquí puedes implementar la lógica de autenticación
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Puedes agregar validaciones y llamadas a un servicio de autenticación
  }

  // Función para navegar a la página de registro
  goToRegistro() {
    this.navCtrl.navigateForward('/registro'); // Navegar a la página de registro
  }

}


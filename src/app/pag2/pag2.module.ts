import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Pag2PageRoutingModule } from './pag2-routing.module';
import { Pag2Page } from './pag2.page';
import { LoginComponent } from '../login/login.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pag2PageRoutingModule
  ],
  declarations: [
    Pag2Page,
    LoginComponent // Declara el componente de login aquí
  ]
})
export class Pag2PageModule {}

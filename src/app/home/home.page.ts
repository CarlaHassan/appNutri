import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentTime: string = ''; // Inicializa currentTime con una cadena vacía

  // Opciones para el carrusel de imágenes
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    spaceBetween: 10, // Separación entre las imágenes
    slidesPerView: 1, // Muestra una imagen a la vez
  };

  constructor() { }

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000); // Actualiza la hora cada segundo
  }

  updateTime() {
    const date = new Date();
    this.currentTime = date.toLocaleTimeString();
  }
}


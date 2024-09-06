import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  currentTime: string = ''; // Inicializa currentTime con una cadena vacía

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


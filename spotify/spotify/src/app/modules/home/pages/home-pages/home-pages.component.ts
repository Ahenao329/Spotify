import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-pages',//El selector es lo que vamos a utilizar para llamar a este componente dentro de un apartado html
  templateUrl: './home-pages.component.html',//Es el html que esta asociado con este componente(HomePageComponent)
  styleUrls: ['./home-pages.component.css']//la url del archuvio que va a contener los estilos que solo van a afectar el componenete
})
export class HomePagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

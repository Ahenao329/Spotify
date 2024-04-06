import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

mainMenu: {defaultOptions: Array<any>, accessLink: Array<any>}//mi mainmenu contendra dos componentes de tipo array
= {defaultOptions:[], accessLink: []}

customOptions: Array<any> =[]

  constructor(private router: Router) { }

  ngOnInit(): void {//ingOnInit() es un ciclo de vida, los componenetes en angular tienen 8 ciclos de vida, este es el ciclo inicial que se ejcuta luego del constructor, es el ciclo que se usa para hacer llamados de serviciios o peticiones a urlss, por lo que una de susu funciones principales es llenar datos
  
  this.mainMenu.defaultOptions = [
    {
      name: 'Home',
      icon: 'uil uil-estate',
      router: ['/', 'auth']
    },
    {
      name: 'Buscar',
      icon: 'uil uil-search',
      router: ['/', 'history']//TODO:http://localhost:4200/history
    },
    {
      name: 'Tu biblioteca',
      icon: 'uil uil-chart',
      router: ['/', 'favorite'],
      query: { hola: 'mundo' }
      
    }
  ]

  this.mainMenu.accessLink = [
    {
      name: 'Crear lista',
      icon: 'uil-plus-square'
    },
    {
      name: 'Canciones que te gustan',
      icon: 'uil-heart-medical'
    }
  ]

  this.customOptions = [
    {
      name: 'Mi lista º1',
      router: ['/']
    },
    {
      name: 'Mi lista º2',
      router: ['/']
    },
    {
      name: 'Mi lista º3',
      router: ['/']
    },
    {
      name: 'Mi lista º4',
      router: ['/']
    }
  ]



}

goTo($event: any): void {
   this.router.navigate(['/', 'favorite'], {queryParams: {
  key1: 'value1',
  key2: 'valuer2',
  key3: 'value3'
}
})
  console.log($event)
}
}

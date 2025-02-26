import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() callbackData: EventEmitter<any> = new EventEmitter()
  src:string = ''
  constructor() { }

  ngOnInit(): void {
  }

  callSearch(term: string): void {
    if(term.length >= 3){ 
      this.callbackData.emit(term)
      console.log('🔴 Llamamos a nuestra API HTTP GET---> ', term); //a angular no le importa si no ponemod la ; pero lo haremos por buenas practicas
     }
  }

}

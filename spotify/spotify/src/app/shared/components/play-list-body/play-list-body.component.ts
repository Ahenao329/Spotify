import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-play-list-body',
  templateUrl: './play-list-body.component.html',
  styleUrls: ['./play-list-body.component.css']
})
export class PlayListBodyComponent implements OnInit {
//tracks: Array<TrackModel> =[] //podemos usar esta o la de abajo, es lo mismo
@Input() tracks: TrackModel[] = []
optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }

  constructor() { }

  ngOnInit(): void {
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order == 'asc' ? 'desc' : 'asc' //si el orden el igual a ascendente devulvalo descendente si no devuelvalo ascendente
    }
    console.log(this.optionSort);
  }
}

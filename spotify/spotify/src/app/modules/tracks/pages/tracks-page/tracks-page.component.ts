import { Component, OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy {
 
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
  this.loadDataAll()
  this.loadDataRandom()
  }

  async loadDataAll(): Promise<any>{
    /* MANEJANDOLO  LOS SUBSCRIBE COMO PROMESAS AQUI ABAJO 👇👇 */
    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()


    /* MANEJANDOLO  LOS SUBSCRIBE COMO PROMESAS AQUI ABAJO 👇👇 */
    // this.trackService.getAllTracks$().toPromise()
    // .then(res => {})
    // .catch(err => {})

    /* MANEJANDOLO NORMAL LOS SUBSCRIBE AQUI ABAJO 👇👇 */
    // this.trackService.getAllTracks$()
    // .subscribe((Response:TrackModel[]) =>{
    //   this.tracksTrending = Response
    // })
  }

  loadDataRandom():void{
    this.trackService.getAllRandom$()
    .subscribe((Response:TrackModel[]) =>{
      this.tracksRandom = Response
    // }, err =>{
    //   console.log('Error de conexion'),
    //   alert('Error de conexion')

    // }
  })
  }

ngOnDestroy(): void {
}

}

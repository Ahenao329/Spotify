import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import {  observable, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TrackModel } from '@core/models/tracks.model';
//import * as dataRaw from 
@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  constructor(private http: HttpClient) { 


    }

    /**
     * 
     * @returns Devolver todas las canciones! molonas! 🤘🤘
     */
     private skipById(listTrcks: TrackModel[], id: number): Promise<TrackModel[]>{
      return new Promise((resolve, reject) => {
        const listTmp = listTrcks.filter(a => a._id != id)
        resolve(listTmp)
      })
     }
    /**
     * 
     * @returns //TODO: {data[..1,...2,...3]}
     */
    getAllTracks$(): Observable<any> {
       return this.http.get(`${this.URL}/tracks`, {
        headers: new HttpHeaders({Autorization: 'Bearer TOKEN'})
       })
       .pipe(map(({data}: any) =>{
        return data
       }))
    }

/**
 * 
 * @returns Devolver canciones random
 */
    getAllRandom$(): Observable<any> {
      return this.http.get(`${this.URL}/tracks`)
      .pipe(     
         tap(data => console.log('👉👉', data)),
          mergeMap(({data}: any) => this.skipById(data.reverse(), 0)), //podemos hacer el reverce y eliminar la posicion que queramos 
//TODO LO DE ARRIBA INCLUYENDO EL SKIPBYID PUEDE SER REMPLAZADO POR LO DE ABAJO Y ES MAS SENCILLO LO DE ABAJO, SOLO LO DEJAMOS ASI PARA MOSTRAR FORMAS
      // .pipe(map(({data}: any) =>{
      //   return data.reverse()
      //  }),

      // map((dataRevertida) =>{
      //   return dataRevertida.filter((track: TrackModel) => track._id !=1)
      //  })

      //SI QUEREMOS HACER CONSOLE LOG 
      tap(data => console.log('👉👉', data)),
      catchError((err)=>{
        const {status, statusText} = err;
        console.log('Algo paso revisame 🆗🔴--', [status, statusText]);
        return of ([])
      })
       )
   }

    }
  

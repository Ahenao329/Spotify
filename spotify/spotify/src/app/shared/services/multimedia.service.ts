import { TrackModel } from './../../core/models/tracks.model';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
callback: EventEmitter<any> = new EventEmitter<any>()

public trackInfo$: BehaviorSubject<any> = new BehaviorSubject (undefined)
public audio!: HTMLAudioElement //TODO <audio>🎶🎶🤍
public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00')
public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject('-00:00')
public playerStatus$: BehaviorSubject<string> = new BehaviorSubject('paused')
public playerPercentage$: BehaviorSubject<number> = new BehaviorSubject(0)

constructor() {

  this.audio = new Audio()

  this.trackInfo$.subscribe(responseOK => {
    if (responseOK) {
      this.setAudio(responseOK)
    }
  })

  this.listenAllEvents()

}


private listenAllEvents(): void {

  this.audio.addEventListener('timeupdate', this.calculateTime, false)
  this.audio.addEventListener('playing', this.setPlayerStatus, false)
  this.audio.addEventListener('play', this.setPlayerStatus, false)
  this.audio.addEventListener('pause', this.setPlayerStatus, false)
  this.audio.addEventListener('ended', this.setPlayerStatus, false)

}

private setPlayerStatus = (state: any) => {
  switch(state.type){//TODO: playing, dice si se esta reproduciendo o no
    case 'play':
      this.playerStatus$.next('play')
      break
    case 'playing':
      this.playerStatus$.next('playing')
      break
    case 'ended':
      this.playerStatus$.next('ended')
      break
    default:
      this.playerStatus$.next('paused')
      break;
  }

}

private calculateTime = () => {
  const { duration, currentTime } = this.audio
  this.setTimeElapsed(currentTime)
  this.setRemaining(currentTime, duration)
  this.setPercentage(currentTime, duration)
}

private setPercentage(currentTime: number, duration: number): void {
  //TODO duration ---> 100%
  //TODO currentTime ---> (x)
  //TODO (currentTime * 100) / duration
  let percentage = (currentTime * 100) / duration;
  this.playerPercentage$.next(percentage)
}


private setTimeElapsed(currentTime: number): void {
  let seconds = Math.floor(currentTime % 60) //TODO 1,2,3
  let minutes = Math.floor((currentTime / 60) % 60)
  //TODO  00:00 ---> 01:05 --> 10:15
  const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
  const displayMinutes = (minutes < 10) ? `0${minutes}` : minutes;
  const displayFormat = `${displayMinutes}:${displaySeconds}`
  this.timeElapsed$.next(displayFormat)
}

private  setRemaining(currentTime: number, duration:number): void{
  let tineLeft = duration - currentTime
  let seconds = Math.floor(tineLeft % 60) //TODO: 1, 2 , 3 ......
  let minutes = Math.floor((tineLeft /60) % 60)
  const displaySeconds = (seconds < 10) ? `0${seconds}` : seconds;
  const displayMinutes= (minutes < 10) ? `0${minutes}` : minutes;
  const displayFormat = `-${displayMinutes}:${displaySeconds}`
  this.timeRemaining$.next(displayFormat)
}
 
//TODO: Funciones publicas🔴(●'◡'●)
public setAudio(track: TrackModel): void {
  console.log('🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍🐱‍🏍', track);
  this.audio.src = track.url
  this.audio.play()
}

public togglePlayer(): void {
  (this.audio.paused) ? this.audio.play() : this.audio.pause()
}


public seekAudio(percentage: number): void{
  const{duration} = this.audio
  console.log(`Duration: ${duration}, percentage: ${percentage}`)
  //TODO: 100% --> duration (200 seg) en nuestro caso
  //TODO 70% --> (x)
  const percentageToSecond =(percentage * duration) /100
  this.audio.currentTime = percentageToSecond
  //TODO: 🔴🔴 70% ---> second --->
}






// ************************************Observables rxjs******************************
// myObservable1$: BehaviorSubject<any> = new BehaviorSubject('🆗🆗🆗 Agua')//tubo instalado sin ninguna funcionalidad aun
//   constructor() { 

//     // *****************BehavorSubject****************
//     setTimeout(() => {
//       this.myObservable1$.next('🆗🆗🆗🆗 agua')

//     },1000)
//     setTimeout(() => {
//       this.myObservable1$.next('🆗🆗🆗🆗 agua')

//     },2000)
//     setTimeout(() => {
//       this.myObservable1$.error('🆗🆗🆗🆗 agua')

//     },3000)


    // *******************PARA EL SUBJECT*******************
    // setTimeout(() => {
    //   this.myObservable1$.next('🆗🆗🆗🆗 agua')

    // },1000)
    // setTimeout(() => {
    //   this.myObservable1$.next('🆗🆗🆗🆗 agua')

    // },2000)
    // setTimeout(() => {
    //   this.myObservable1$.error('🆗🆗🆗🆗 agua')

    // },3000)
    


    // ******************El normal*******************
    // this.myObservable1$ = new Observable(
    //   (observer: Observer<any>) => {
    //     observer.next('🆗 agua')

    //     setTimeout(() =>{
    //       observer.complete()
    //     },2500)

    //     setTimeout(() =>{
    //       observer.next('🆗 agua')
    //     },1500)

    //     setTimeout(() =>{
    //       observer.error('🆗 agua')
    //     },3500)
    //   }
    //   )

  // }


}

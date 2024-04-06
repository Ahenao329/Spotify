import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksModule } from '@modules/tracks/tracks.module';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: Array<any>, args: string | null = null, sort:string = 'asc'): TrackModel[] {
try{
  if(args==null){
    return value
  } else {
    const tmpList = value.sort((a, b) => {
      if (a[args] < b[args]) {
        return -1
      }
      else if (a[args] === b[args]) {
        return 0;
      }
      else if (a[args] > b[args]) {
        return 1;
      }
      return 1
    });
    return(sort == 'asc') ? tmpList : tmpList.reverse() //si la lista esta acsendente la deje asi por que es como la estamos ordenando por defecto si no que la reverse para que quede desendente
  }

} catch (e){
  console.log('Algo paso');
  return value

    }
  }
}
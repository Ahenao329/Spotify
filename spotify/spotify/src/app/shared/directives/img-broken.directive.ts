import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { elementAt } from 'rxjs';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {
//TODO: host Host HOST
@Input() customImg: string = ''
@HostListener('error') handleError(): void //HostListener: escuchar al host, en este caso al img
{
  const elNative = this.elHost.nativeElement
  elNative.src = this.customImg
  // console.log('🔴 Esta imagen revento -->', this.elHost)
  }

  
constructor(private elHost: ElementRef) //elementRef es una directiva de angular, para hacer referencia a un elemento 
  { 

  }

}

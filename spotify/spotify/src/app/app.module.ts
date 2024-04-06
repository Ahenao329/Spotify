import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [//TODO:pueden ser componenetes, direectivas, pipes
    AppComponent,
  ],
  imports: [//TODO:solo se importan otros modulos
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[],//TODO:tambien podemos exportar
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor, 
      multi: true//si llegaramos a usar otro interceptor, ya que pueden tener uso multiiple
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

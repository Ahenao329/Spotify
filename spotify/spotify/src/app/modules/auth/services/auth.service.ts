import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.api //ESTE PODRIAMOS DDEJARLO ASI URL = environment.api, pero por buenas practicas no lo hacemos
  constructor(private http: HttpClient, private cookie: CookieService) { }

sendCredentials(email: string, password: string): Observable<any> {
  const body = {
    email,
    password 
   }

  return this.http.post(`${this.URL}/auth/login`, body)
  .pipe(
    tap((responseOk: any) =>{
      const {tokenSession, data} = responseOk
      this.cookie.set('token_servicio',tokenSession, 4, '/')      
    })
  )
}
   
}

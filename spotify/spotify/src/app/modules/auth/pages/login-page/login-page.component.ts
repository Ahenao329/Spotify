import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false
formLogin: FormGroup = new FormGroup({});

  constructor(private authService: AuthService, private cookie: CookieService,
     private router: Router ) { }

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('',
    [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12)
    ])
   

  })
  }

  sendLogin(): void{
    const {email, password} = this.formLogin.value
this.authService.sendCredentials(email, password)
//TODO: 200 < 400 QUE SON LAS RESPUESTAS CORRECTAS
.subscribe(ResponseOK =>{// aqui entra cuando el usuario y el password sean correctas
  console.log('Session iniciada correctamente', ResponseOK);
  const {tokenSession, data} = ResponseOK
  this.cookie.set('token',tokenSession, 4, '/')
  this.router.navigate(['/','tracks'])
  },
  err => {
    this.errorSession = true
  console.log('Ocurrio error con tu email o password ')
  }) 
 }
}

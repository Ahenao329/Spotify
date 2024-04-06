
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from '@core/guards/session.guard';
import { HomePagesComponent } from './modules/home/pages/home-pages/home-pages.component';

const routes: Routes = [//TODO: router-outlet (padre)
  {
    path: 'auth',//TODO:Localhost:4200/ (Public) Login, Register, Fogot ....
    //es importante que los modulos que importemos, hayan sido creados con rutas
    loadChildren:() => import ('./modules/auth/auth.module').then(m => m.AuthModule) //esta viene siendo el lazy loading, solo se cargara ese modulo y mas na
  },
  {
    path: '',//TODO (Private)🔴🔴🔴
    component: HomePagesComponent, //esto no es lazy loading
    loadChildren:() => import ('./modules/home/home.module').then(m => m.HomeModule), // esto si lo es, la m es de modulo
    canActivate:[SessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

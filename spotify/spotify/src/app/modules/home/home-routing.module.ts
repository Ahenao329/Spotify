import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';

const routes: Routes = [
  {

      path: 'tracks',
      loadChildren: () => import('./../tracks/tracks.module').then(m => m.TracksModule)
    },
    {
      path: 'history',
      loadChildren: () => import('./../history/history.module').then(m => m.HistoryModule)
    },
    {
      path: 'favorite',
      loadChildren: () => import('./../favorite/favorite.module').then(m => m.FavoriteModule)
    },
    {
      path: '**',
      redirectTo: '/tracks'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

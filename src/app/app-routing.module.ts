import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search-me',
    loadComponent: () => import('./search-me/search-me.component').then((searchMe)=> searchMe.SearchMeComponent),
  },
  {
    path: '',
    redirectTo: '/search-me',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

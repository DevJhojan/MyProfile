import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'search-me',
    title: 'Search me',
    loadComponent: () =>
      import('./search-me/search-me.component').then(
        (searchMe) => searchMe.SearchMeComponent
      ),
  },
  {
    path: 'home',
    title: 'Home',
    loadChildren: () =>
      import('./home/home.module').then((home) => home.HomeModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
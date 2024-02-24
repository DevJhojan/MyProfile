import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children:[
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        title: 'Home',
        loadChildren: () =>
        import('./home/home.module').then((home) => home.HomeModule),
      },
      {
        path: 'search-me',
        title: 'Search me',
        loadComponent: () =>
          import('./search-me/search-me.component').then(
            (searchMe) => searchMe.SearchMeComponent
          ),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Profile',
    pathMatch: 'full'
  },
  {
    path: 'Profile',
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
        loadChildren: () => import('./core/core.module').then((home) => home.CoreModule),
      },
    ]
  },
  {
    path: 'test',
    title: 'Test',
    component: TestComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core.component';
import { MainComponent } from './main/main.component';
import { SeccondComponent } from './seccond/seccond.component';

const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    children: [
      {
        path: '',
        redirectTo: 'Main',
        pathMatch: 'full',
      },
      {
        path: 'Main',
        title: 'Profile',
        component: MainComponent,
      },
      {
        path: 'Seccond',
        title: 'About-Me',
        component: SeccondComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}

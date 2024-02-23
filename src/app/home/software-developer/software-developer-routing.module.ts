import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutProgrammerComponent } from 'src/app/layouts/layout-programmer/layout-programmer.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProgrammerComponent,
    children: [
      {
        path: '',
        redirectTo: '/about_me',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: '/about_me',
      },
      {
        path: 'about_me',
        component: AboutMeComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/about_me',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareDeveloperRoutingModule {}

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
        redirectTo: '/about me',
        pathMatch: 'full',
      },
      {
        path: 'about me',
        component: AboutMeComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/about me',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareDeveloperRoutingModule {}
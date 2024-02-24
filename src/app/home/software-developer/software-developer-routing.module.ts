import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutProgrammerComponent } from 'src/app/layouts/layout-programmer/layout-programmer.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProgrammerComponent,
    children: [
      {
        path: '',
        redirectTo: 'about_me',
        pathMatch: 'full',
      },
      {
        path: 'about_me',
        component: AboutMeComponent,
      },
      {
        path:'skills',
        component: SkillsComponent,
      }
    ],
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareDeveloperRoutingModule {}

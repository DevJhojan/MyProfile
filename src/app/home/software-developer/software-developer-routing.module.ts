import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutProgrammerComponent } from 'src/app/layouts/layout-programmer/layout-programmer.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutProgrammerComponent,
    children: [
      {
        path: '',
        redirectTo: 'skills',
        pathMatch: 'full',
      },
      {
        path: 'about_me',
        title: 'About me',
        component: AboutMeComponent,
      },
      {
        path: 'skills',
        title: 'Skills',
        component: SkillsComponent,
      },
      {
        path: 'projects',
        title: 'Projects',
        component: ProjectsComponent,
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
export class SoftwareDeveloperRoutingModule {}

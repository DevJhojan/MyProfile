import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'about_me',
        pathMatch: 'full',
      },
      {
        path: 'software',
        loadChildren: () =>
          import('./software-developer/software-developer.module').then(
            (software) => software.SoftwareDeveloperModule
          ),
      },
      {path: 'about_me', component: AboutMeComponent},
      {
        path: 'contact-me',
        component: ContactMeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

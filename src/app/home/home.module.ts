import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutProgrammerComponent } from '../layouts/layout-programmer/layout-programmer.component';
import { SoftwareDeveloperModule } from './software-developer/software-developer.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../material/material.module';
import { SiderBarComponent } from '../components/sider-bar/sider-bar.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@NgModule({
  declarations: [HomeComponent, ContactMeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutProgrammerComponent,
    SoftwareDeveloperModule,
    MaterialModule,
    SiderBarComponent,
  ]
})
export class HomeModule { }

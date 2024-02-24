import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LayoutProgrammerComponent } from '../layouts/layout-programmer/layout-programmer.component';
import { SoftwareDeveloperModule } from './software-developer/software-developer.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutProgrammerComponent,
    SoftwareDeveloperModule
  ]
})
export class HomeModule { }

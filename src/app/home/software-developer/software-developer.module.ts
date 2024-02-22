import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareDeveloperRoutingModule } from './software-developer-routing.module';
import { SoftwareDeveloperComponent } from './software-developer.component';


@NgModule({
  declarations: [SoftwareDeveloperComponent],
  imports: [
    CommonModule,
    SoftwareDeveloperRoutingModule
  ]
})
export class SoftwareDeveloperModule { }

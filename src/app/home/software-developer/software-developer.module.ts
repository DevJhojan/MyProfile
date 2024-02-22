import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SoftwareDeveloperRoutingModule } from './software-developer-routing.module';
import { AboutMeComponent } from './about-me/about-me.component';
import { LayoutProgrammerComponent } from 'src/app/layouts/layout-programmer/layout-programmer.component';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, SoftwareDeveloperRoutingModule, LayoutProgrammerComponent],
})
export class SoftwareDeveloperModule {}

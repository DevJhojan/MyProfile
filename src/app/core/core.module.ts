import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MainComponent } from './main/main.component';
import { SeccondComponent } from './seccond/seccond.component';


@NgModule({
  declarations: [CoreComponent, MainComponent, SeccondComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }

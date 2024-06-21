import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MainComponent } from './main/main.component';
import { SeccondComponent } from './seccond/seccond.component';
import { CommonsModule } from '../common/commons.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [CoreComponent, MainComponent, SeccondComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CommonsModule,
    SharedModule
  ]
})
export class CoreModule { }

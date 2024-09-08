import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { MainComponent } from './main/main.component';
import { SeccondComponent } from './seccond/seccond.component';
import { CommonsModule } from '../common/commons.module';
import { SharedModule } from '../shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [CoreComponent, MainComponent, SeccondComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    CommonsModule,
    SharedModule,
  ]
})
export class CoreModule { }

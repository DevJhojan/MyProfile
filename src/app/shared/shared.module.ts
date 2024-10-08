import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowsMenuComponent } from './components/windows-menu/windows-menu.component';
import { TitleComponent } from './components/title/title.component';
import { PictureComponent } from './components/picture/picture.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { BtnSlashComponent } from './components/btn-slash/btn-slash.component';
import { ContainerComponent } from './components/container/container.component';
import { CardsNormalsComponent } from './components/cards-normals/cards-normals.component';
import { CardsProjectsComponent } from './components/cards-projects/cards-projects.component';
import { BtnSwitchThemeComponent } from './components/btn-switch-theme/btn-switch-theme.component';
import { ModalProjectComponent } from './Modals/modal-project/modal-project.component';
import { ModalOboutComponent } from './Modals/modal-obout/modal-obout.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ],
  exports: [
    WindowsMenuComponent,
    TitleComponent,
    PictureComponent,
    ContactMeComponent,
    BtnSlashComponent,
    BtnSwitchThemeComponent,
    ContainerComponent,
    CardsNormalsComponent,
    CardsProjectsComponent,
    ModalProjectComponent,
    ModalOboutComponent,
  ],
  declarations: [
    WindowsMenuComponent,
    TitleComponent,
    PictureComponent,
    ContactMeComponent,
    BtnSlashComponent,
    BtnSwitchThemeComponent,
    ContainerComponent,
    CardsNormalsComponent,
    CardsProjectsComponent,
    ModalProjectComponent,
    ModalOboutComponent,
  ],
})
export class SharedModule {}

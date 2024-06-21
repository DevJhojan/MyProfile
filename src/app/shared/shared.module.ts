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

@NgModule({
  imports: [CommonModule],
  exports: [
    WindowsMenuComponent,
    TitleComponent,
    PictureComponent,
    ContactMeComponent,
    BtnSlashComponent,
    ContainerComponent,
    CardsNormalsComponent,
    CardsProjectsComponent,
  ],
  declarations: [
    WindowsMenuComponent,
    TitleComponent,
    PictureComponent,
    ContactMeComponent,
    BtnSlashComponent,
    ContainerComponent,
    CardsNormalsComponent,
    CardsProjectsComponent,
  ],
})
export class SharedModule {}

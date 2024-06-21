import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowsMenuComponent } from './components/windows-menu/windows-menu.component';
import { TitleComponent } from './components/title/title.component';
import { ProjectComponent } from './components/project/project.component';
import { PictureComponent } from './components/picture/picture.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { BtnSlashComponent } from './components/btn-slash/btn-slash.component';
import { ContainerComponent } from './components/container/container.component';

@NgModule({
  imports: [CommonModule],
  exports: [
    WindowsMenuComponent,
    TitleComponent,
    ProjectComponent,
    PictureComponent,
    ContactMeComponent,
    BtnSlashComponent,
    ContainerComponent
  ],
  declarations: [
    WindowsMenuComponent,
    TitleComponent,
    ProjectComponent,
    PictureComponent,
    ContactMeComponent,
    BtnSlashComponent,
    ContainerComponent
  ],
})
export class SharedModule {}

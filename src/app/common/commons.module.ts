import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { MoreAboutMeComponent } from './more-about-me/more-about-me.component';



@NgModule({
  declarations: [
    ProfileComponent,
    SkillsComponent,
    MoreAboutMeComponent
  ],
  exports:[
    ProfileComponent,
    SkillsComponent,
    MoreAboutMeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommonsModule { }

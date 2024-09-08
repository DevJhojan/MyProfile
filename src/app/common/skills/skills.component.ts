import { Component, OnInit } from '@angular/core';
import { skillsData } from '@data/*';
import { ICardNormal } from '@models/*';
@Component({
  selector: 'common-skills',
  template: `
    <div *ngIf="isMobileMetod()">
      <shared-btn-slash title="Skills" [normal]="true" [cardsNomal]="skills" />
    </div>
    <div *ngIf="!isMobileMetod()">
      <shared-container title="Skills" [normal]="true" [cardNormals]="skills" />
    </div>
  `,
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: ICardNormal[] = skillsData;
  isMobile: boolean = false;
  constructor() {}

  isMobileMetod(): boolean {
    const mq = window.matchMedia('(max-width: 600px)');
    this.isMobile = mq.matches;
    return this.isMobile;
  }
}

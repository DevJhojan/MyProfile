import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'common-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  isMobile: boolean = false;
  constructor() { }


  isMobileMetod():boolean {
    const mq = window.matchMedia('(max-width: 800px)');
    this.isMobile = mq.matches;
    return this.isMobile;
  }

}

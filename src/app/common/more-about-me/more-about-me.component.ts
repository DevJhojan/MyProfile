import { Component } from '@angular/core';

@Component({
  selector: 'common-more-about-me',
  templateUrl: './more-about-me.component.html',
  styleUrls: ['./more-about-me.component.scss']
})
export class MoreAboutMeComponent {
  isMobile: boolean = false;
  constructor() { }


  isMobileMetod():boolean {
    const mq = window.matchMedia('(max-width: 600px)');
    this.isMobile = mq.matches;
    return this.isMobile;
  }
}

import { Component } from '@angular/core';
import { contentsData } from '@data/*';
import { IContent} from '@models/*';

@Component({
  selector: 'common-more-about-me',
  templateUrl: './more-about-me.component.html',
  styleUrls: ['./more-about-me.component.scss']
})
export class MoreAboutMeComponent {
  isMobile: boolean = false;
  contents: IContent[] = contentsData;

  constructor() { }

  backPage(){
    window.history.back();
  }

  isMobileMetod():boolean {
    const mq = window.matchMedia('(max-width: 600px)');
    this.isMobile = mq.matches;
    return this.isMobile;
  }
}

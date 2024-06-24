import { Component, Input, OnInit } from '@angular/core';
import { ICardNormal, IContent, ISubContend } from '@models/*';
import { CardProjects, ICardProjects } from '../../../models/shared/i-cards';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'shared-btn-slash',
  templateUrl: './btn-slash.component.html',
  styleUrls: ['./btn-slash.component.scss'],
  animations: [
    trigger('animate', [
      state('inactive', style({
        transform: 'translateY(0)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateY(10px)',
        opacity: 1
      })),
      transition('inactive => active', animate('300ms ease-out')),
      transition('active => inactive', animate('300ms ease-in'))
    ])
  ]
})
export class BtnSlashComponent {
  @Input() projects : boolean = false;
  @Input() title: string = "Title";
  @Input() normal : boolean = false;
  @Input() cardsNomal?: ICardNormal[] = [];
  @Input() CardsProjects?: ICardProjects[] = [];
  @Input() content : boolean = false;
  @Input() cardsContent?: ISubContend [] = [];
  animationState = 'inactive';
  state: boolean = false;
  constructor() { }


  slashConten(){
    if (this.state == true){
      this.animationState = this.animationState === 'inactive' ? 'active' : 'inactive';
      setTimeout(()=>{
        this.state = false;
      }, 500);
    }else{
      setTimeout(()=>{
        this.animationState = this.animationState === 'inactive' ? 'active' : 'inactive';
      }, 500)
        this.state = true;
    }

  }

}

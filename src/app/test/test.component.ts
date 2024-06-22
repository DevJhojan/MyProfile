import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component  } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
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
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ])
  ]
})
export class TestComponent {
  animationState = 'inactive';
  state: boolean = false;

  animateMe() {
    this.animationState = this.animationState === 'inactive' ? 'active' : 'inactive';
  }
}

import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  template: `
    <main>
      <div>
        <div class="abarcado">
          <shared-picture [img]="MyPhoto" />
        </div>
        <shared-contact-me />
        <div>
          <shared-title Title="Jhojan Danilo Toro Perez" />
          <common-skills />
        </div>
      </div>
      <div >
        <common-profile />
        <button *ngIf="!isVerticalMetod()" (click)="goSeccondInformation()"> More About Me </button>
        <common-more-about-me *ngIf="isVerticalMetod()"/>
      </div>
    </main>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  MyPhoto: string = 'assets/img/MyProfile.png';
  isVertical:boolean = false;
  constructor (private _router: Router){
  }
  goSeccondInformation():void{
    this._router.navigate(['Profile/home/Seccond'])
  }

  isVerticalMetod():boolean {
    const mq = window.matchMedia('(min-height: 950px)');
    this.isVertical = mq.matches;
    return this.isVertical;
  }
}

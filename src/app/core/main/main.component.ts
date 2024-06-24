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
      </div>
      <div class="content-more" *ngIf="isVerticalMetod()" >
        <shared-container title="About Me" [textQ]="true" [textInput]="text" />
        <common-more-about-me />
      </div>
    </main>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  MyPhoto: string = 'assets/img/MyProfile.png';
  isVertical:boolean = false;
  text: string = 'I am a software developer with over 8 months of experience in the field of programming and application development. Throughout my career, I have demonstrated a strong ability to work in a team and collaborate effectively with colleagues to achieve project goals. I am characterized by my enthusiasm to learn and adopt new concepts and technologies, which allows me to stay up to date and quickly adapt to the changing demands of the technological environment. 🔥'
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

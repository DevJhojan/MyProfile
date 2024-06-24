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
  text: string = 'Soy un desarrollador de software con más de 8 meses de experiencia en el campo de la programación y desarrollo de aplicaciones. Durante mi carrera, he demostrado una sólida capacidad para trabajar en equipo y colaborar de manera efectiva con colegas para alcanzar los objetivos del proyecto. Me caracterizo por mi entusiasmo para aprender y adoptar nuevos conceptos y tecnologías, lo que me permite mantenerme actualizado y adaptarme rápidamente a las demandas cambiantes del entorno tecnológico. 🔥'
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

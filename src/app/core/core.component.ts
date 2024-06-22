import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-core',
  template: `
    <div class="content">
      <button (click)="toggleTheme()">
        <img *ngIf="isLightTheme" src="assets/img/moon.png" alt="change theme dark">
        <img *ngIf="!isLightTheme" src="assets/img/sun.png" alt = "chage theme light">
      </button>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls:['./core.component.scss']

})
export class CoreComponent {
  title = 'My Profile';
  isLightTheme = false;

  toggleTheme() {
    this.isLightTheme =!this.isLightTheme;
    document.body.classList.toggle('lightTheme', this.isLightTheme);
  }
}

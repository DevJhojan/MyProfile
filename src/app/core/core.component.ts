import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-core',
  template: `
    <div class="content">
      <button (click)="toggleTheme()">
        Theme
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

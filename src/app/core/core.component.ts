import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-core',
  template: `
    <div class="content">
      <shared-btn-switch-theme (changeTheme)="toggleTheme($event)"/>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls:['./core.component.scss']

})
export class CoreComponent {
  private _theme = "dark";
  private _key = "theme";
  title = 'My Profile';
  isLightTheme = false;
  constructor(){
    const storageTheme = localStorage.getItem(this._key);
    if(storageTheme) {
      this._theme = storageTheme;
      this.isLightTheme = storageTheme === 'light';
      document.body.classList.toggle('lightTheme', this.isLightTheme);
    }
  }
  toggleTheme($event:boolean) {
    this.isLightTheme =$event;
    if(this.isLightTheme==true)  this._theme = "light";
    else this._theme = "dark"
    localStorage.setItem(this._key, this._theme);
    document.body.classList.toggle('lightTheme', this.isLightTheme);
  }
}

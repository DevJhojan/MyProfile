import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="content">
      <a [href]="repo">
        <img class="img-repo" src="assets/img/github.png"/>
      </a>
      <router-outlet></router-outlet>
      <footer_loop></footer_loop>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showMenu = true;
  repo: string = 'https://github.com/DevJhojan'
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

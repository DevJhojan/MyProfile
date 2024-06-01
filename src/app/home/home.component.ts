import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <!-- <mat-sidenav-container class="h-full w-full bg-transparent">
      <mat-sidenav #sidenav mode="side" [opened]="showMenu" class="wi-side">
        <img
          *ngIf="showMenu == true"
          (click)="toggleMenu()"
          src="assets/img/menu.ico"
          class="border-round-2x1 ml-1 mt-1 absolute top-0 cursor-pinter"
          alt="btn-menu"
        />
        <sider-bar (hiddenToogle)="toggleMenu()"></sider-bar>
      </mat-sidenav>
      <mat-sidenav-content class="container">
        <img
        *ngIf="showMenu == false"
        (click)="toggleMenu()"
        src="assets/img/menu.ico"
        class="border-round-2x1 ml-1 mt-1 absolute top-0"
        alt="btn-menu"
        />
      </mat-sidenav-content>

    </mat-sidenav-container> -->
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

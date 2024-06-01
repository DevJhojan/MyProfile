import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-sidenav-container class="h-full w-full bg-transparent">
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
        <div class="ml-4 mt-2 bg-transparent">
          <router-outlet></router-outlet>
        </div>
        <img
          *ngIf="showMenu == false"
          (click)="toggleMenu()"
          src="assets/img/menu.ico"
          class="border-round-2x1 ml-1 mt-1 absolute top-0"
          alt="btn-menu"
        />
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showMenu = true;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-sidenav-container class="h-full w-full">
      <mat-sidenav #sidenav mode="side" [opened]="showMenu" class="wi-side">
        <img
          *ngIf="showMenu == true"
          (click)="toggleMenu()"
          src="assets/img/menu.ico"
          class="border-round-2x1 ml-1 mt-1 absolute top-0"
          alt="btn-menu"
        />
        <sider-bar></sider-bar>
      </mat-sidenav>
      <mat-sidenav-content class="bg-black-super">
        <div class="ml-4 mt-2">
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
  showMenu = false;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

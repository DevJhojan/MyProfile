import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <mat-sidenav-container class="h-full w-full">
      <mat-sidenav #sidenav mode="side" [opened]="showMenu" class="w-3 bg-black-alpha-50">
        <button
          *ngIf="showMenu == true"
          (click)="toggleMenu()"
          class="border-round-2x1 absolute top-0"
        >
          <mat-icon >menu</mat-icon>
        </button>
        <sider-bar></sider-bar>
      </mat-sidenav>
      <mat-sidenav-content class="bg-black-super">
        <div class="ml-4 mt-2">
          <router-outlet></router-outlet>
        </div>
        <button
          *ngIf="showMenu == false"
          (click)="toggleMenu()"
          class="border-round-2x1  absolute top-0 ml-1"
        >
          <mat-icon>menu</mat-icon>
        </button>
      </mat-sidenav-content>
    </mat-sidenav-container>

  `,
  styles:[],
})
export class HomeComponent {
  showMenu = true;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}

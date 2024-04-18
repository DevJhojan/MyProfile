import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <mat-sidenav-container class="h-full w-full">
      <mat-sidenav
        #sidenav
        mode="side"
        [opened]="showMenu"
        class="w-3 bg-black-alpha-50"
      >
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
  styles: [
    `
      .wi-side {
        width: 18%;
      }
      .bg-black-super {
        width: auto;
        height: 99vh;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .btn-menu {
        position: absolute;
        top: 0.5rem;
        left: 1rem;
      }
      @media (max-width: 800px) {
        .wi-side {
          width: 100%;
        }
      }
    `,
  ],
})
export class HomeComponent {
  showMenu = true;
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}


import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-core',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class CoreComponent {
  title = 'My Profile';
}

import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-core',
  template: `
    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
    `
      .content {
        overflow: hidden scroll;
        scrollbar-width: none;
        width: 100vw;
        height: 100vh;
        background-image: url('../../assets/img/wallpaper.jpg');
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    `,
  ],
})
export class CoreComponent {
  title = 'My Profile';
}

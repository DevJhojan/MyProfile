import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <main>
      <div>
        <div class="abarcado">
          <shared-picture [img]="MyPhoto" />
        </div>
        <shared-contact-me />
        <div>
          <shared-title Title="Jhojan Danilo Toro Perez" />
          <common-skills />
        </div>
      </div>
      <div >
        <common-profile />
        <common-more-about-me />
      </div>
    </main>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  MyPhoto: string = 'assets/img/MyProfile.png'; 
}

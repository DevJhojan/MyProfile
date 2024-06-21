import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <main>
      <div>
        <shared-picture />
        <shared-contact-me />
        <div>
          <shared-title />
          <common-skills />
        </div>
      </div>
      <div class="mt-4">
        <common-profile />
        <common-more-about-me />
      </div>
    </main>
  `,
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {}

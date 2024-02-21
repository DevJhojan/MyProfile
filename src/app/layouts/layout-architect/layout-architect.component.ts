import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterModule],
  selector: 'app-layout-architect',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutArchitectComponent {

}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports:[RouterModule],
  selector: 'app-layout-programmer',
  template: `<router-outlet></router-outlet>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProgrammerComponent {

}

import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SiderBarComponent } from 'src/app/components/sider-bar/sider-bar.component';

@Component({
  standalone: true,
  imports: [RouterModule, SiderBarComponent],
  selector: 'app-layout-programmer',
  template: `
    <sider-bar [links]="menu"></sider-bar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./layout-programmer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutProgrammerComponent {
  menu: string[] = ['about me'] //, 'skills', 'sof skills', 'tools', 'projects'];
}

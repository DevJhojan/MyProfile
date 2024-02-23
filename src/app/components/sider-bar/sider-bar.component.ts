import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sider-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <h1>MENU</h1>
      <ul>
        <li *ngFor="let link of links">
          <a [routerLink]="['/home/software/' + link]" routerLinkActive="router-link-active">
            {{ link | uppercase }}
          </a>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./sider-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderBarComponent {
  @Input() links: string[] = [];
}

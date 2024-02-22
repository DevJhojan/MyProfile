import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sider-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav>
      <ul>
        <li><h1>Menu</h1></li>
        <li *ngFor="let link of links">
          <a [routerLink]="['/' + link]" routerLinkActive="router-link-active">
            {{ link }}
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

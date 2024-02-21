import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sider-bar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>sider-bar works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderBarComponent { }

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>error-modal works!</p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorModalComponent { }

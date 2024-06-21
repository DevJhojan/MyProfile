import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-title',
  template: ` <h1>{{ Title }}</h1> `,
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() Title: String = 'No hay titulo actual mente';
  constructor() {}
}

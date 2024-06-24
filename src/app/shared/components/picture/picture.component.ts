import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-picture',
  template: ` <img [src]="img" alt="MyPhoto" /> `,
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent {
  @Input() img: string = '';
  constructor() {}
}

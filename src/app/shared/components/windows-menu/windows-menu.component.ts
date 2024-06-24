import { Component, Input, OnInit } from '@angular/core';
import { Content, IContent, ISubContend, Subcontent } from '@models/*';

@Component({
  selector: 'shared-windows-menu',
  templateUrl: './windows-menu.component.html',
  styleUrls: ['./windows-menu.component.scss']
})
export class WindowsMenuComponent  implements OnInit{

  @Input() Contents: IContent[] = []
  content: Content = new Content();

  constructor() {
  }
  ngOnInit(): void {
    this.content = this.Contents[0];
  }

  showSubContent(content: Content){
    this.content = content;
  }

}

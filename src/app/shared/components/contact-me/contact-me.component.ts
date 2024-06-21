import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'shared-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  socialIcons = [
    { iconClass: 'fa fa-facebook-official fa-2x icon', url: '' },
    { iconClass: 'fa fa-linkedin fa-2x icon', url: '' },
    {
      iconClass: 'fa fa-envelope fa-2x icon',
      url: 'mailto:devjhojanxxii@gmail.com',
    },
    { iconClass: 'fa fa-whatsapp fa-2x icon', url: '' },
  ];

  constructor(private elementRef: ElementRef) {}

  toggleNavbar() : void {
    this.elementRef.nativeElement
      .querySelector('.navbar-nav')
      .classList.toggle('show');
  }
  // onMouseOver(event: MouseEvent): void {
  //   this.toggleNavbar();
  // }

  // onMouseOut(event: MouseEvent):void {
  //   this.toggleNavbar();
  // }
}

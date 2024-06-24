import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'shared-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  socialIcons = [
    { iconClass: 'fa fa-facebook-official fa-2x icon', url: 'https://www.facebook.com/profile.php?id=61561425719329' },
    { iconClass: 'fa fa-linkedin fa-2x icon', url: 'https://www.linkedin.com/in/dev-jhojan-xxii' },
    {
      iconClass: 'fa fa-envelope fa-2x icon',
      url: 'mailto:devjhojanxxii@gmail.com',
    },
    { iconClass: 'fa fa-whatsapp fa-2x icon', url: 'https://api.whatsapp.com/send?phone=3026305843' },
  ];

  constructor(private elementRef: ElementRef) {}

  toggleNavbar() : void {
    this.elementRef.nativeElement
      .querySelector('.navbar-nav')
      .classList.toggle('show');
  }
  openOtherPageWindow(url: string){
    window.open(url);
  }
  // onMouseOver(event: MouseEvent): void {
  //   this.toggleNavbar();
  // }

  // onMouseOut(event: MouseEvent):void {
  //   this.toggleNavbar();
  // }
}

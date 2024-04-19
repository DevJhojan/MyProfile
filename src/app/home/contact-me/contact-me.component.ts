import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  medialSocial = [
    {img:'assets/img/linkedin.png', name: 'LinkedIn', url:'https://www.linkedin.com/in/jhojan-d-toro', enable: true},
    {img:'assets/img/whatsapp.png', name: 'Whatsapp', url: '', enable: false}
  ]
  constructor(
    private router: Router,
  ) {}
  onScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.router.navigate(['/home']);
    }
    if(event.deltaY < 0) {
      this.router.navigate(['/home/software/projects']);
    }
  }
}

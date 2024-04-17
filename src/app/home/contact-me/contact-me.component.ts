import { Component } from '@angular/core';

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
}

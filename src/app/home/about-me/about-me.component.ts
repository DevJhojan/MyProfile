import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent {
  title: string = 'Jhojan Danilo Toro Perez';
  nikname: string = 'Dev Jhojan';
  subtitle: string = 'Software Developer junior';
  description: string =
    'Front-end developer with initiative and outstanding skills in web page design and development. I have solid organization and multitasking skills, actively seeking a job position that allows me to apply my skills and experience for the benefit of both the company and its clients. Passionate about creating engaging and functional digital experiences, I am committed to contributing to the growth and success of the team by implementing innovative solutions and a proactive approach to each project. 🔥';

  constructor(
    private router: Router,
  ) {}

  onScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.router.navigate(['/home/software/skills']);
    }
    if(event.deltaY < 0) {
      this.router.navigate(['/home/contact-me']);
    }
  }
}

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
    'I am a software developer with over 8 months of experience in the field of programming and application development. Throughout my career, I have demonstrated a strong ability to work in a team and collaborate effectively with colleagues to achieve project goals. I am characterized by my enthusiasm to learn and adopt new concepts and technologies, which allows me to stay up to date and quickly adapt to the changing demands of the technological environment. 🔥';
  constructor(private router: Router) {}

  onScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.router.navigate(['/home/software/skills']);
    }
    if (event.deltaY < 0) {
      this.router.navigate(['/home/contact-me']);
    }
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  img: string;
  title: string;
  view: string;
  tooling:string;
  url: string;
  enable: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  template: `
    <div class="w-full row bg-transparent wrap" (wheel)="onScroll($event)">
      <ng-container
        *ngFor="let project of projects"
      >
        <article
          class="w-10rem column"
          *ngIf="project.enable===true"
        >
        <img class="h-8rem" [src]="project.img" [alt]="project.title" />
        <p>{{project.title}}</p>
        <label>tooling: {{project.tooling}}</label>
          <h2 >
            <a [href]="project.url" class="text-orange-500" >{{ project.view }}</a>
          </h2>
        </article>
      </ng-container>
    </div>
  `,
  styles:[
    `
      article{
        height: auto;
        margin-top: 2rem;
        padding: 2rem;
        background-color: #232222;
      }
      div{
        margin-top: 10%;
      }
      h2{
        width:80%;
        font-size: 90%;
        margin-top: 1rem;
        color: #D12000;
      }
      h2:hover{
        font-size: 100%;
      }
      img{
        box-shadow: none;
      }
    `
  ]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      img: 'assets/img/RickAndMorty.png',
      title: 'Rick & Morty',
      view: 'visit page',
      url: 'https://rick-and-morty-three-omega.vercel.app/',
      tooling: 'Angular',
      enable: true,
    },
    {
      img: 'assets/img/pokedesk2.png',
      title: 'Pokedesk',
      view: 'visit page',
      tooling:'Angular',
      url: 'https://pokedesk-lilac.vercel.app/',
      enable: true,
    },

    {
      img: 'assets/img/',
      title: 'BullTask',
      view: 'visit page',
      tooling: '',
      url: '',
      enable: false,
    },
    {
      img: 'assets/img/snake.ico',
      title: 'Snake Game',
      view: 'Download',
      tooling: 'C#',
      url: 'https://github.com/DevJhojan/Game-Snake/raw/main/Install.zip',
      enable: true,
    }
  ];

  constructor(
    private router: Router,
  ) {}
  onScroll(event: WheelEvent): void {
    if (event.deltaY > 0) {
      this.router.navigate(['/home/contact-me']);
    }
    if(event.deltaY < 0) {
      this.router.navigate(['/home/software/skills']);
    }
  }
}

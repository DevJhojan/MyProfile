import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  img: string;
  title: string;
  view: string;
  tooling:string;
  repo: string;
  url: string;
  enable: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  template: `
  <!-- (wheel)="onScroll($event)" -->
    <div class="w-full row bg-transparent wrap" >
      <ng-container
        *ngFor="let project of projects"
      >
        <article
          class="w-20rem row"
          *ngIf="project.enable===true"
        >
        <div class="column pd-2">
          <img class="h-8rem" [src]="project.img" [alt]="project.title" />
          <a [href]="project.repo">
            <img src="assets/img/github.png" alt="">
          </a>
        </div>
        <div class="column pd-2">
          <p>{{project.title}}</p>
          <label>tooling: {{project.tooling}}</label>
          <h2>
            <a [href]="project.url" class="text-orange-500" >{{ project.view }}</a>
          </h2>
        </div>
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
      repo: 'https://github.com/DevJhojan/RickAndMorty',
      tooling: 'Angular',
      enable: true,
    },
    {
      img: 'assets/img/pokedesk2.png',
      title: 'Pokedesk',
      view: 'visit page',
      tooling:'Angular',
      repo: 'https://github.com/DevJhojan/Pokedesk',
      url: 'https://pokedesk-lilac.vercel.app/',
      enable: true,
    },

    {
      img: 'assets/img/',
      title: 'BullTask',
      view: 'visit page',
      tooling: '',
      repo: '',
      url: '',
      enable: false,
    },
    {
      img: 'assets/img/snake.ico',
      title: 'Snake Game',
      view: 'Download',
      tooling: 'C#',
      repo: 'https://github.com/DevJhojan/Game-Snake',
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

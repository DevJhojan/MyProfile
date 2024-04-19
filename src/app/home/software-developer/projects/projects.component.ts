import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Project {
  img: string;
  title: string;
  tooling:string;
  url: string;
  enable: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  template: `
    <div class="w-full row wrap" (wheel)="onScroll($event)">
      <ng-container
        *ngFor="let project of projects"
      >
        <article
          class="w-10rem column"
          *ngIf="project.enable===true"
        >
          <img class="h-8rem" [src]="project.img" [alt]="project.title" />
          <h2 >
            <a [href]="project.url" class="text-orange-500" >{{ project.title }}</a>
          </h2>
        </article>
      </ng-container>
    </div>
  `,
  styles:[
    `
      article{
        height: 15rem;
        margin-top: 2rem;
        padding: 2rem
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
      url: 'https://rick-and-morty-three-omega.vercel.app/',
      tooling: 'Angular',
      enable: true,
    },
    {
      img: 'assets/img/pokedesk2.png',
      title: 'Pokedesk',
      tooling:'Angular',
      url: 'https://pokedesk-lilac.vercel.app/',
      enable: true,
    },

    {
      img: 'assets/img/',
      title: 'BullTask',
      tooling: '',
      url: '',
      enable: false,
    },
    {
      img: 'assets/img/',
      title: 'Rick & Morty',
      tooling: '',
      url: '',
      enable: false,
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

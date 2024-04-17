import { Component } from '@angular/core';

interface Project {
  img: string;
  title: string;
  url: string;
  enable: boolean;
}

@Component({
  selector: 'app-projects',
  standalone: false,
  template: `
    <div class="w-full row wrap">
      <ng-container
        *ngFor="let project of projects"
      >
        <article
          class="w-8rem column"
          *ngIf="project.enable===true"
        >
          <img class="h-6rem" [src]="project.img" [alt]="project.title" />
          <h2 >
            <a [href]="project.url" class="text-orange-500" >{{ project.title }}</a>
          </h2>
        </article>
      </ng-container>
    </div>
  `,
  styles:[
    `
      h2{
        width:80%;
        font-size: 100%;
        margin-top: 1rem;
        color: #D12000;
      }
      h2:hover{
        font-size: 110%;
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
      img: 'assets/img/pokedesk2.png',
      title: 'Pokedesk',
      url: 'https://pokedesk-lilac.vercel.app/',
      enable: true,
    },
    {
      img: 'assets/img/',
      title: 'BullTask',
      url: '',
      enable: false,
    },
    {
      img: 'assets/img/',
      title: 'Rick & Morty',
      url: '',
      enable: false,
    }
  ];
}

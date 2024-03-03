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
    <div class="w-100 row wrap">
      <article
        class="w-15 column"
        *ngFor="let project of projects"
      >
        <img class="hr-6" [src]="project.img" [alt]="project.title" />
        <h3>
          <a [href]="project.url" >{{ project.enable?project.title:"No Disponible" }}</a>
        </h3>
      </article>
    </div>
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      img: 'assets/img/pokedesk.png',
      title: 'Pokedesk',
      url: 'https://pokedesk-lilac.vercel.app/',
      enable: true,
    },
    {
      img: 'assets/img/Dragons.png',
      title: 'Dragons',
      url: '#',
      enable: false,
    },
    {
      img: 'assets/img/WebTask.png',
      title: 'WebTasks',
      url: '#',
      enable: false,
    },
  ];
}

import { Component } from '@angular/core';

interface Aptitud{
  img: string;
  title: string;
}

@Component({
  selector: 'skills',
  template: `
    <article class="txt-center h-25rem w-10">
      <div class="column">
        <h2 class="m-0 txt-center"> SKILLS </h2>
        <ul>
          <li *ngFor="let skill of skills"> {{ skill }} </li>
        </ul>
      </div>
      <div class="column">
        <h2 class="m-0 txt-center"> TOOLING </h2>
        <ul>
          <li *ngFor="let aptitud of aptitudes">
            <img [src]="aptitud.img" [alt]="aptitud.title">
            {{ aptitud.title }}
          </li>
        </ul>
      </div>
    </article>
  `,
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent {
  skills: string[] = [
    'High resolution capacity',
    'Versatility and dynamism',
    'Communicative skills',
    'Adaptability',
    'Leadership',
  ];
  aptitudes: Aptitud[] = [
    {img: 'assets/img/Angular_logo.png', title:'Angular'},
    {img: 'assets/img/.Net.png', title:'.Net'},
    {img: 'assets/img/Fast_api_logo.png', title:'FastAPI'},
    {img: 'assets/img/MongoDB_logo.png', title:'MongoDB'},
    {img:'assets/img/SQLServer_logo.png', title: 'SQL Server'}
  ];
}

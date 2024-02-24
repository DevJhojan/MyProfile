import { Component } from '@angular/core';

@Component({
  selector: 'skills',
  template: `
    <article class="txt-center ">
      <div class="column">
        <h3 class="m-0 w-100 txt-center">Skills</h3>
        <ul>
          <li *ngFor="let skill of skills">{{ skill }}</li>
        </ul>
      </div>
      <div class="column">
        <h3 class="m-0 w-100 txt-center">Aptitudes</h3>
        <ul>
          <li *ngFor="let aptitud of aptitudes">{{ aptitud }}</li>
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
  aptitudes: string[] = ['Angular', '.Net', 'FastAPI', 'MongoDB', 'SQL Server'];
}

import { Component } from '@angular/core';
import { projectsData } from '@data/*';
import { CardProjects, ICardProjects } from '@models/*';

@Component({
  selector: 'common-profile',
  template: `
    <div>
      <shared-container title="Profile" [projects]="true" [cardProjects]="projects"/>
    </div>
  `,
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  projects: ICardProjects[] = projectsData;
}

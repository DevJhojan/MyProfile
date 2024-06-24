import { Component } from '@angular/core';
import { CardProjects, ICardProjects } from '@models/*';

@Component({
  selector: 'common-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  projects: ICardProjects[] = [
    {
       img: 'assets/img/pokedesk2.png',
       name: 'Pokedesk',
       tool : 'Angular',
       state: 'active',
       url: 'https://pokedesk-lilac.vercel.app/pokedesk/search'
    },
    {
      img: 'assets/img/RickAndMorty.png',
      name: 'Rick & Morty',
      tool: 'Angular',
      state: 'Active',
      url: 'https://rick-and-morty-three-omega.vercel.app'
    }
  ];
}

import { ICardProjects, TypeApp } from '@models/*';

export const projectsData: ICardProjects[] = [
  {
    img: 'assets/img/Pokedesk/pokedesk2.png',
    name: 'Pokedesk',
    tool: 'Angular',
    state: 'active',
    type: TypeApp.WEB,
    url: 'https://pokedesk-lilac.vercel.app/pokedesk/search',
    imgs: [
      "assets/img/Pokedesk/1.png",
      "assets/img/Pokedesk/2.png",
      "assets/img/Pokedesk/3.png",
      "assets/img/Pokedesk/4.png",
      "assets/img/Pokedesk/5.png",
    ],
  },
  {
    img: 'assets/img/RickAndMorty/RickAndMorty.png',
    name: 'Rick & Morty',
    tool: 'Angular',
    state: 'Active',
    type: TypeApp.WEB,
    url: 'https://rick-and-morty-three-omega.vercel.app',
    imgs: [
      'assets/img/RickAndMorty/1.png',
      'assets/img/RickAndMorty/2.png',
      'assets/img/RickAndMorty/3.png',
      'assets/img/RickAndMorty/4.png',
      'assets/img/RickAndMorty/5.png',
    ],
  },
];
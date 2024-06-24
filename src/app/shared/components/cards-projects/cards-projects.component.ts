import { Component, Input, OnInit } from '@angular/core';
import { CardProjects, ICardProjects } from '@models/*';

@Component({
  selector: 'shared-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss']
})
export class CardsProjectsComponent implements OnInit {
  @Input() cardProjects: ICardProjects = new CardProjects(); // this can return null
  constructor() { }
  ngOnInit() {
  }
  otherLocationOpen(url: string){
    window.open(url);
  }
}

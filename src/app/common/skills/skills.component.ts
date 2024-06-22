import { Component, OnInit } from '@angular/core';
import { ICardNormal } from '@models/*';
@Component({
  selector: 'common-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills:ICardNormal[] = [
    {h2: 'Tooling', items: ["Angular", ".Net", "SQL server", "Mongo DB"]},
    {h2: 'Soft Skills', items: ["Adaptabilidad", "Liderasgo", "Trabajo en Equipo"]}
  ]
  isMobile: boolean = false;
  constructor() { }


  isMobileMetod():boolean {
    const mq = window.matchMedia('(max-width: 600px)');
    this.isMobile = mq.matches;
    return this.isMobile;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { CardNormal, ICardNormal } from '@models/*';

@Component({
  selector: 'shared-cards-normals',
  templateUrl: './cards-normals.component.html',
  styleUrls: ['./cards-normals.component.css']
})
export class CardsNormalsComponent implements OnInit {
  @Input() cardNormal?: ICardNormal= new CardNormal();
  constructor() { }
  ngOnInit() {
  }

}

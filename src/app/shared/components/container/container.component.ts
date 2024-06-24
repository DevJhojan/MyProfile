import { Component, Input, OnInit } from '@angular/core';
import { ICardNormal, ICardProjects } from '@models/*';


@Component({
  selector: 'shared-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  @Input() projects: boolean = false;
  @Input() cardProjects?: ICardProjects[] = []; // this can return null
  @Input() title: string = "Title";
  @Input() textQ: boolean = false;
  @Input() textInput?: string = '';
  @Input() normal: boolean = false; 
  @Input() cardNormals?: ICardNormal[] = [];
  constructor() {}

  ngOnInit() {}
}

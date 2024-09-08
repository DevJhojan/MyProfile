import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardProjects, ICardProjects } from '@models/*';
import { ModalProjectComponent } from '../../Modals/modal-project/modal-project.component';

@Component({
  selector: 'shared-cards-projects',
  templateUrl: './cards-projects.component.html',
  styleUrls: ['./cards-projects.component.scss'],
})
export class CardsProjectsComponent implements OnInit {
  @Input() cardProjects: ICardProjects = new CardProjects(); // this can return null
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}
  otherLocationOpen(url: string) {
    const dialogRef = this.dialog.open(ModalProjectComponent, {
      data: this.cardProjects,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}

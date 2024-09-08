import { Component, Inject, Type } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ICardProjects, TypeApp } from '@models/*';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.scss'],
})
export class ModalProjectComponent {
  typeApp: boolean = false;
  indexImageCurren: number = 0;
  imageCurren: string = this.data.imgs[this.indexImageCurren];
  constructor(
    public dialogRef: MatDialogRef<ModalProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ICardProjects
  ) {}

  nextImage(): void {
    this.indexImageCurren++;
    if (this.indexImageCurren >= this.data.imgs.length)
      this.indexImageCurren = 0;
    this.changeImage();
  }
  backImage(): void {
    this.indexImageCurren--;
    if (this.indexImageCurren < 0)
      this.indexImageCurren = this.data.imgs.length - 1;
    this.changeImage();
  }
  changeImage(): void {
    this.imageCurren = this.data.imgs[this.indexImageCurren];
  }
  type(): boolean {
    if (this.data.type == TypeApp.WEB) this.typeApp = true;
    if (this.data.type == TypeApp.APPLICATION || this.data.type == TypeApp.GAME)
      this.typeApp = false;
    return this.typeApp;
  }
  routerAction(): void {
    window.open(this.data.url);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-me',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <article class="mlp-25">
      <h2>What are you looking for?</h2>
      <div class="column">
        <button
          (mouseleave)="showImage('')"
          (mouseenter)="showImage('sd')"
          (click)="routerPath('/softwaredev')"
          id="sd"
          icon="pi pi-iconName"
          label="label"
        >
          A Software Developer
        </button>
        <button
          (mouseleave)="showImage('')"
          (mouseenter)="showImage('ta')"
          (click)="routerPath('/tecArchitecture')"
          id="ta"
          icon="pi pi-iconName"
          label="label"
        >
          An architectural technician
        </button>
      </div>
    </article>
    <img class="img-gif mlp-40" *ngIf="gifImgBool" [src]="gifImgUse" />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchMeComponent {
  gifImgBool: boolean = false;
  gifImgUse: string = '';
  constructor(private _router: Router) {}
  showImage(image: string) {
    if (image == 'sd') {
      this.gifImgBool = true;
      this.gifImgUse = '../../assets/img/software-developer.gif';
    } else if (image == 'ta') {
      this.gifImgBool = true;
      this.gifImgUse = '../../assets/img/architectural-technician.gif';
    } else {
      this.gifImgBool = false;
    }
  }
  routerPath(path: string) {
    try {
      this._router.navigate(['home' + path]);
    } catch (e) {
      console.log(e);
    }
  }
}

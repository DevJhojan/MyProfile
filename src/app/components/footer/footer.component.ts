import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'footer_loop',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="menu">
      <button
        *ngFor="let item of items"
        mat-button
        (click)="navigate(item.url)"
      >
        {{ item.name | titlecase}}
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  @Output() hiddenToogle: EventEmitter<boolean> = new EventEmitter();
  showMenu = true;
  showFiller = true;
  constructor( private router:Router){
  }
  items = [
    {name: 'about me', url: '/home'},
    {name: 'skills', url:'/home/software/skills'},
    {name: 'personal projects', url:'/home/software/projects'},
    {name: 'contac me', url:'/home/contact-me'},
  ]
  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  navigate(url: string){
   this.router.navigate([url]);
   this.hiddenToogle.emit();
  }
}

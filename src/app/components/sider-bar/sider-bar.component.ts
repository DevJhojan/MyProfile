import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'sider-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="menu mt-6 h-30rem p-5">
      <button
        *ngFor="let item of items"
        mat-button
        (click)="navigate(item.url)"
      >
        {{ item.name | titlecase}}
      </button>
    </div>
  `,
  styleUrls: ['./sider-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderBarComponent {
  @Output() hiddenToogle: EventEmitter<boolean> = new EventEmitter();
  showMenu = true;
  showFiller = false;
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

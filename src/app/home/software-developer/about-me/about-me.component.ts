import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent {
  title: string = 'Jhojan Danilo Toro Perez';
  subtitle: string = 'Software Developer junior';
  description: string = 'Desarrollador Front-end con iniciativa y habilidades destacadas en el diseño y desarrollo de páginas web. Poseo una sólida organización y habilidades multitarea, buscando activamente una posición laboral que me permita aplicar mis destrezas y experiencia en beneficio tanto de la empresa como de sus clientes. Apasionado por la creación de experiencias digitales atractivas y funcionales, estoy comprometido con contribuir al crecimiento y éxito del equipo mediante la implementación de soluciones innovadoras y un enfoque proactivo en cada proyecto 🔥';
}

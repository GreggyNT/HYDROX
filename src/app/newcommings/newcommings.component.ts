import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-newcommings',
  standalone: true,
  imports: [],
  templateUrl: './newcommings.component.html',
  styleUrl: './newcommings.component.css'
})
export class NewcommingsComponent {
  @Input() leftModelSrc:string;
  @Input() centerModelSrc:string;
  @Input() rightModelSrc:string;
}

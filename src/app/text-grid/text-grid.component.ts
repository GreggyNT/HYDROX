import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-text-grid',
  standalone: true,
  imports: [],
  templateUrl: './text-grid.component.html',
  styleUrl: './text-grid.component.css'
})
export class TextGridComponent {
  @Input() logoSrc:string;
}

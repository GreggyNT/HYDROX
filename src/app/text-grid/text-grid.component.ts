import { Component,Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ThemeCheckerService } from '../theme-checker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text-grid',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './text-grid.component.html',
  styleUrl: './text-grid.component.css'
})
export class TextGridComponent {
  @Input() logoSrc:string;
  backSrc:string;
  constructor(private themeChecker:ThemeCheckerService){}
  sub:Subscription;
  ngOnInit(): void 
{
  this.sub = this.themeChecker.themeToggled.subscribe(theme => { 
    if (theme){
      this.backSrc = '../../assets/back/back_w.png'
    }
    else {
      this.backSrc = '../../assets/back/back_d.png'
    }
  });
}
}

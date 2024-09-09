import { Component,Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ThemeCheckerService } from '../theme-checker.service';
import { Subscription } from 'rxjs';
import { ChildrenOutletContexts } from '@angular/router';
import { fadeAnimation } from '../animations/routeAnimations';
import { logoAnimation } from '../animations/logoAnimation';
import { fade } from '../animations/backFadeAnimation';

@Component({
  selector: 'app-text-grid',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './text-grid.component.html',
  styleUrl: './text-grid.component.css',
  animations:[fadeAnimation,logoAnimation,fade]
})
export class TextGridComponent {
  @Input() logoSrc:string;
  backSrc:string;
  constructor(private themeChecker:ThemeCheckerService,private contexts:ChildrenOutletContexts){}
  sub:Subscription;
  ngOnInit(): void 
{
  
}
getRouteAnimationData() {
  var state= this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  return state;
}
getBackAnimation(){
  if (!this.themeChecker.themeToggled.getValue())
  return 'in';
  return 'out';
}
}

import { Component } from '@angular/core';
import { TextGridComponent } from '../text-grid/text-grid.component';
import { Subscription } from 'rxjs';
import { ThemeCheckerService } from '../theme-checker.service';
import { ChildrenOutletContexts } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import {resizeAnimation} from '../animations/resizeAnimation';
import { heightAnimation } from '../animations/heightAnimation';
import {TimelineLite} from 'gsap'

@Component({
  selector: 'app-under-header',
  standalone: true,
  imports: [TextGridComponent,NgOptimizedImage],
  templateUrl: './under-header.component.html',
  styleUrl: './under-header.component.css',
  animations:[resizeAnimation,heightAnimation]
})
export class UnderHeaderComponent {
constructor(private themeChecker:ThemeCheckerService, private contexts:ChildrenOutletContexts){}
  sub:Subscription;
  static logoW =  "../../assets/logo/Logo-big.png";
  static logoD =  "../../assets/logo/Logo-neon.png";
  logoSrc:string;
  ngOnInit(): void 
{
  this.sub = this.themeChecker.themeToggled.subscribe(theme => {
    if (theme) {
      this.logoSrc =UnderHeaderComponent.logoW;
    } else {
      this.logoSrc =UnderHeaderComponent.logoD;

    }
  });

}
getRouteAnimationData() {
  var state= this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  if (state == 'home-animation'||state == 'shop-animation'){
  document.body.getElementsByClassName("text1").item(0)?.classList.add("no");
  document.body.getElementsByClassName("text2").item(0)?.classList.add("no");
  }
else
{
  document.body.getElementsByClassName("text1").item(0)?.classList.remove("no");
  document.body.getElementsByClassName("text2").item(0)?.classList.remove("no");
}

  return state;
}
}

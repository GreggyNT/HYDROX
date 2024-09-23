import { Component ,OnInit} from '@angular/core';
import { TextGridComponent } from '../text-grid/text-grid.component';
import { Subscription } from 'rxjs';
import { ThemeCheckerService } from '../theme-checker.service';
import { ChildrenOutletContexts } from '@angular/router';
import { NgIf, NgOptimizedImage } from '@angular/common';
import {resizeAnimation} from '../animations/resizeAnimation';
import { heightAnimation } from '../animations/heightAnimation';
import {TimelineLite} from 'gsap'

@Component({
  selector: 'app-under-header',
  standalone: true,
  imports: [TextGridComponent,NgOptimizedImage,NgIf],
  templateUrl: './under-header.component.html',
  styleUrl: './under-header.component.css',
  animations:[resizeAnimation,heightAnimation]
})
export class UnderHeaderComponent implements OnInit {
constructor(private themeChecker:ThemeCheckerService, private contexts:ChildrenOutletContexts){}


  sub:Subscription;
  static logoW =  "../../assets/logo/Logo-big.png";
  static logoD =  "../../assets/logo/Logo-neon.png";
  static back_w_ns = "../../assets/back/back_w.png";
  static back_d_ns = "../../assets/back/back_d.png";
  static back_shop = "../../assets/back/back_shop.png";
  back_w:string;
  back_d:string;
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
  var state= this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  if (state == 'shop-animation')
    {
      this.back_w = '';
      this.back_d = UnderHeaderComponent.back_shop;
    }
    else
    {
      this.back_w = UnderHeaderComponent.back_w_ns;
      this.back_d = UnderHeaderComponent.back_d_ns;
    }
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
  if (state == 'shop-animation')
  {
    this.back_w = '';
    this.back_d = UnderHeaderComponent.back_shop;
  }
  else
  {
    this.back_w = UnderHeaderComponent.back_w_ns;
    this.back_d = UnderHeaderComponent.back_d_ns;
  }
  return state;
}
}

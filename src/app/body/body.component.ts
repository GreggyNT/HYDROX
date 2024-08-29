import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import { CubeComponent } from '../cube/cube.component';
import { CardsContainerComponent } from '../cards-container/cards-container.component';
import { TextGridComponent } from '../text-grid/text-grid.component';
import { AdvantagesComponent } from '../advantages/advantages.component';
import { NewcommingsComponent } from '../newcommings/newcommings.component';
import { CooperationComponent } from '../cooperation/cooperation.component';
import { PartnersComponent } from '../partners/partners.component';
import { ThemeCheckerService } from '../theme-checker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [AdvantagesComponent,CardsContainerComponent,CubeComponent,TextGridComponent,NewcommingsComponent,
    CooperationComponent,PartnersComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  static logoW =  "../../assets/logo/Logo-big.png";
  static logoD =  "../../assets/logo/Logo-neon.png";
  static leftModelW = "../../assets/models/left_model_w.png";
  static centerModelW = "../../assets/models/center_model_w.png";
  static rightModelW = "../../assets/models/right_model_w.png";
  static leftModelD = "../../assets/models/left_model_d.png";
  static centerModelD = "../../assets/models/center_model_d.png";
  static rightModelD = "../../assets/models/right_model_d.png";

  logoSrc:string;
  leftModelSrc:string;
  centerModelSrc:string;
  rightModelSrc:string;

  constructor(private themeCheckerService: ThemeCheckerService) { 
  }
  sub:Subscription;

  
ngOnInit(): void 
{
  this.sub = this.themeCheckerService.themeToggled.subscribe(theme => {
    if (theme) {
      this.logoSrc =BodyComponent.logoW;
      this.leftModelSrc =BodyComponent.leftModelW;
      this.centerModelSrc =BodyComponent.centerModelW;
      this.rightModelSrc = BodyComponent.rightModelW;
    } else {
      this.logoSrc =BodyComponent.logoD;
      this.leftModelSrc =BodyComponent.leftModelD;
      this.centerModelSrc =BodyComponent.centerModelD;
      this.rightModelSrc = BodyComponent.rightModelD;
    }
    
  });

}
}

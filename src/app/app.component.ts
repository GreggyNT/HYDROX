import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { CubeComponent } from './cube/cube.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from './body/body.component';
import { OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ThemeCheckerService } from './theme-checker.service';
import { fadeAnimation } from './animations/routeAnimations';
import { TextGridComponent } from './text-grid/text-grid.component';
import { UnderHeaderComponent } from './under-header/under-header.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,BodyComponent,CubeComponent,RouterLink,RouterLinkActive,TextGridComponent,UnderHeaderComponent],
  animations:[fadeAnimation],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  theme:boolean;
  constructor(private themeChecker:ThemeCheckerService){
   
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  themeToggleSubscription: Subscription;
  ngOnInit(): void {
    this.themeChecker.themeToggled.next((window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches));
    this.toggleDarkTheme();
    
  }
  title = 'HYDROX';
  lupaSrc :string;
  cartSrc  :string;
  lightSrc :string;
  static togglebleElements = ["header",""]; 
  toggleDarkTheme(): void {

    this.themeChecker.themeToggled.next(!this.themeChecker.themeToggled.getValue());
    var elements =  document.body.getElementsByTagName("app-root");
    document.body.getElementsByTagName("app-root").item(0)?.classList.toggle("black");
    document.body.getElementsByClassName("buttons-container").item(0)?.classList.toggle("black");
    document.body.getElementsByClassName("background").item(0)?.classList.toggle("black");
    document.body.getElementsByClassName("background2").item(0)?.classList.toggle("black");
    document.body.getElementsByClassName("text-container2").item(0)?.classList.toggle("black");

    if(this.themeChecker.themeToggled.getValue()){
      this.lupaSrc = "../../assets/icons/Search.png";
      this.cartSrc = "../../assets/icons/Shopping-black.png";
      this.lightSrc = "../../assets/icons/Dome-lightdark.png";
    }
    else{
      this.lupaSrc = "../../assets/icons/Search-white.png";
      this.cartSrc = "../../assets/icons/Shopping-white.png";
      this.lightSrc = "../../assets/icons/Dome-light.png";
    }

 }


 logoSrc:string;
 static logoW =  "../../assets/logo/Logo-big.png";
 static logoD =  "../../assets/logo/Logo-neon.png";
 
}

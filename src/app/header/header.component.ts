import { Component, Input } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterLinkActive } from '@angular/router';
import { headerAnimation } from '../animations/headerAnimation';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  animations:[headerAnimation]
})
export class HeaderComponent {
  constructor(private contexts:ChildrenOutletContexts){}
  currency:string = "BYN";
  @Input() lupaSrc :string;
  @Input() cartSrc :string;
  getRouteAnimationData() {
    var state= this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
    return state;
  }
}

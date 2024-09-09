import { NgOptimizedImage,NgIf, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-type',
  standalone: true,
  imports: [NgOptimizedImage,NgIf,NgStyle],
  templateUrl: './shop-type.component.html',
  styleUrl: './shop-type.component.css'
})
export class ShopTypeComponent {
  @Input() isPictLeft:boolean;
  @Input() title:string="";
  @Input() imageSrc: string="";
  @Input() background:string="";
  @Input() description:string="";
}

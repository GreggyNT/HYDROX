import { Component } from '@angular/core';
import { FilterComponent } from '../filter/filter.component';
import { ShopTypeComponent } from '../shop-type/shop-type.component';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FilterComponent,ShopTypeComponent,NgStyle],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  animationState:string='static';
  title1 = 'ГИДРОМОТОРЫ И ГИДРОНАСОСЫ'
  imgSrc1 = '../../assets/models/left_model_w.png';
  title2 = 'РАСПРЕДЕЛИТЕЛИ'
  imgSrc2 = '../../assets/models/center_model_w.png';
  title3 = 'МОТОР-КОЛЕСО И РЕДУКТОРЫ'
  imgSrc3 = '../../assets/models/right_model_w.png';
  title4 = 'ЗАПАСНЫЕ ЧАСТИ'
  imgSrc4 = '../../assets/models/center_model_w.png';
  title5 = 'КАТАЛОГ'
  imgSrc5 = '../../assets/models/left_model_w.png';
  title6 = 'НА ЗАКАЗ'
  imgSrc6 = '../../assets/models/left_model_w.png';
  trigerWindowAnimation(){
   this.animationState = 'to'
  }
}

import { trigger, transition, style, query, group, animate,state } from '@angular/animations';

export const headerAnimation = trigger('headerAnimation', [
  state('contacts-animation', style({
        height: '10vh'
      })),
      state('home-animation', style({
        height: '8vh',
      })),
      state('shop-animation', style({
        height: '8vh'
      })),
      transition('contacts-animation => *', [
        animate('200ms ease-in')
      ]),
      transition('* => contacts-animation', [
        animate('200ms ease-out')
      ]),
      
]);
import { trigger, transition, style, query, group, animate,state } from '@angular/animations';

export const logoAnimation = trigger('logoAnimation', [
  state('contacts-animation', style({
        height: 'auto',
        width:'45vw',
      })),
      state('home-animation', style({
        height: 'auto',
        width:'33vw',
        transform:'translateY(+10%) translateX(40%)',
      })),
      state('shop-animation', style({
        height: 'auto',
        width:'33vw',
        transform:'translateY(+10%) translateX(40%)',
      })),
      transition('contacts-animation => *', [
        animate('400ms ease-in')
      ]),
      transition('* => contacts-animation', [
        animate('700ms ease-out')
      ])
]);
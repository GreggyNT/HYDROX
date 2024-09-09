import { trigger, transition, style, query, group, animate,state } from '@angular/animations';

export const heightAnimation = trigger('heightAnimation', [
  state('contacts-animation', style({
        height: '45vh'
      })),
      state('home-animation', style({
        height: '25vh',
        
      })),
      state('shop-animation', style({
        height: '25vh',
        
      }))
]);
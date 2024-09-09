import { trigger, transition, style, query, group, animate,state } from '@angular/animations';

export const resizeAnimation = [trigger('resizeAnimation', [
  state('contacts-animation', style({
        height: '73vh'
      })),
      state('home-animation', style({
        height: '30vh'
      })),
      state('shop-animation', style({
        height: '30vh'
      })),
      transition('contacts-animation => *', [
        animate('400ms ease-out')
      ]),
      transition('* => contacts-animation', [
        animate('600ms ease-out')
      ])
]),
trigger('movementAnimation', [
    state('contacts-animation', style({
        })),
        state('home-animation', style({
          transform:'translateY(-10%) translateX(-20vw)',
        })),
        state('shop-animation', style({
            transform:'translateY(-10%) translateX(-20vw)',
          })),
        transition('contacts-animation => *', [
          animate('400ms ease-in')
        ]),
        transition('* => contacts-animation', [
          animate('200ms ease-out')
        ])
  ])];

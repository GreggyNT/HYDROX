import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', [
      style({  width: '100%' })
    ], { optional: true }),
    group([
      query(':enter', [
        style({ opacity: 0 }),
        animate('0.4s ease-out', style({ opacity: 1 }))
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1 ,position: 'fixed',}),
        animate('0.4s ease-out', style({ opacity: 0 }))
      ], { optional: true }),
    ])
  ])
]);

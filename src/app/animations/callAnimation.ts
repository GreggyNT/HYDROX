import { trigger, style, animate, transition, state } from '@angular/animations';

export const callAnimation = [
  trigger('callAnimation', [
    state('in', style({ 'opacity': '1' })),
    state('out', style({ 'opacity': '0' })),
    transition('in <=> out', [
      animate(500)
    ])
  ])
];
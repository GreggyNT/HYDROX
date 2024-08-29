import { CardsContainerService } from '../cards-container-service.service';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { SlimPump } from '../slim-pump';@Component({
  selector: 'app-cards-container',
  standalone: true,
  imports: [MatButtonModule,MatCardModule],
  templateUrl: './cards-container.component.html',
  styleUrl: './cards-container.component.css'
})
export class CardsContainerComponent implements OnInit{

  pumps: SlimPump[]=[];
  constructor(private cards: CardsContainerService) {}
  ngOnInit(): void {
    this.cards.getPumps().subscribe(data =>{
      this.pumps = data;
    })
  }

}

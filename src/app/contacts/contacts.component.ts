import { Component } from '@angular/core';
import { MapComponentComponent } from '../map-component/map-component.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [MapComponentComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}

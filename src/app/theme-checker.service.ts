import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeCheckerService {

  themeToggled:BehaviorSubject<boolean>;
  constructor(){this.themeToggled = new BehaviorSubject<boolean>(true);}

}

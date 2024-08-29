import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SlimPump } from './slim-pump';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardsContainerService {
  apiLink = 'http://localhost:5083/api/Pump';

  constructor(private http:HttpClient) { }
  
  getPumps(): Observable<SlimPump[]> {
    return this.http.get<SlimPump[]>(this.apiLink+'/slim',{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':'*',
        'Access-Control-Allow-Headers': '*'
      }
      })
  }

  getPump(id: number): Observable<SlimPump> {
    return this.http.get<SlimPump>(`${this.apiLink}/${id}`);
  }

  createPump(pump: SlimPump): Observable<SlimPump> {
    return this.http.post<SlimPump>(this.apiLink, pump);
  }
}

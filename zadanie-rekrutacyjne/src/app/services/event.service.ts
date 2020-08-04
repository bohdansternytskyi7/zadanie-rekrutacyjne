import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from '../interfaces/event.interface';


@Injectable({
  providedIn: 'root',
})

export class EventService {

  constructor(private http: HttpClient) { }

  getData():Observable<IEvent[]> {
    return this.http.get<IEvent[]>('https://dev.bfund.ovh/api/events/1197');
  }
}

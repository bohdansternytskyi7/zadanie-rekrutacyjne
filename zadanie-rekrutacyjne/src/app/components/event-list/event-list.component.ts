import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private _eventService: EventService) { }

  public events = [];

  ngOnInit(): void {
    this._eventService.getData()
      .subscribe(data => this.events = data);
    this.events.sort((first, second) => (first.datetime.getDate() - second.datetime.getDate()))
  }

}

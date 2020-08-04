import { Component, OnInit, Input } from '@angular/core';
import { IEvent } from 'src/app/interfaces/event.interface';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

  constructor() { }

  @Input() event: IEvent;
  iconUrl: string;
  @Input() index;
  eventClass: string;
  

  ngOnInit(): void {
    this.iconUrl = `../../../assets/svg/icons/${this.event.type}.svg`;
    this.eventClass = ((this.index % 2 !== 0) ? 'event-even' : 'event');
  }
}

import { Component,OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Event } from '../event';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
}
)
export class AddeventComponent  {
  service: EventserviceService;
  event: Event;
  
  constructor(service: EventserviceService , private router :Router){
    this.service = service;
    this.event = new Event;
  }

  getEvent(){
    this.service.addEvent(this.event).subscribe();
    this.event = new Event();
    this.redirectToView();
  }
  redirectToView(){
    this.router.navigate(['viewevents']).then(()=>window.location.reload());
  }
}

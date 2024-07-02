import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';
import { Event } from '../event';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-updateevent',
  templateUrl: './updateevent.component.html',
  styleUrls: ['./updateevent.component.css']
})
export class UpdateeventComponent implements OnInit{
  service: EventserviceService ;
  event : Event;

constructor(service: EventserviceService, private route :ActivatedRoute, private router: Router){
  this.service=service;
  this.event = new Event;  
}
  ngOnInit(): void {
        this.event.eventCode=this.route.snapshot.params['eventCode'];
        this.event.eventName=this.route.snapshot.params['eventName'];
        this.event.eventPricePerhead=this.route.snapshot.params['eventPricePerDay'];
      }
getUEvent(){
  this.service.updateEvent(this.event).subscribe();
  this.event=new Event();
  this.redirectToView();
}

redirectToView(){
  this.router.navigate(['viewevents']).then(()=>window.location.reload());
}
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event'; 
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-deleteevent',
  templateUrl: './deleteevent.component.html',
  styleUrls: ['./deleteevent.component.css']
})
export class DeleteeventComponent {
  service: EventserviceService ;
  event : Event;

constructor(service: EventserviceService, private route :ActivatedRoute, private router: Router){
  this.service=service;
  this.event = new Event;  
}
ngOnInit(): void {
  this.event.eventCode=this.route.snapshot.params['eventCode'];
  console.log(this.event.eventCode);
  this.service.deleteEvent(this.event).subscribe();
  this.redirectToView();
}

redirectToView(){
this.router.navigate(['viewevents']).then(()=>window.location.reload());
}
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-showevents',
  templateUrl: './showevents.component.html',
  styleUrls: ['./showevents.component.css']
})
export class ShoweventsComponent implements OnInit{
  service: EventserviceService;
  event: Event[];

  constructor(service: EventserviceService,private route : ActivatedRoute, private router: Router){
    this.service=service;
    this.event = [];
  }
  ngOnInit(): void {
    this.service.viewAllEvents().subscribe((data)=>(this.event=data));  
  }
}

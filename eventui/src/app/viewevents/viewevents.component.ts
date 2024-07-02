import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Event } from '../event';
import { EventserviceService } from '../eventservice.service';

@Component({
  selector: 'app-viewevents',
  templateUrl: './viewevents.component.html',
  styleUrls: ['./viewevents.component.css']
})
export class VieweventsComponent implements OnInit{

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
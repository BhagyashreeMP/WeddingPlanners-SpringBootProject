import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';

@Injectable({
  providedIn: 'root'
})
export class EventserviceService {
  viewUrl : string;
  addUrl : string;
  updateUrl : string;
  deleteUrl : string;
  http : HttpClient ;


  constructor(http: HttpClient) {
    this.http=http;
    this.viewUrl='http://localhost:2023/viewEvents';
    this.addUrl='http://localhost:2023/addEvent';
    this.updateUrl='http://localhost:2023/updateEvent';
    this.deleteUrl='http://localhost:2023/deleteEvent';
  }

  public viewAllEvents(): Observable<Event[]>{
    return this.http.get<Event[]>(this.viewUrl);
  }
  public addEvent(event : Event){
    return this.http.post<Event>(this.addUrl,event);
  }
  public updateEvent(event: Event){
    return this.http.put<Event>(this.updateUrl+"/"+event.eventCode,event);
  }
  public deleteEvent(event: Event){
    return this.http.delete(this.deleteUrl+"/"+event.eventCode);
  }
}

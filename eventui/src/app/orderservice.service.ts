import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {
  viewOUrl : string;
  addOUrl : string;
  updateOUrl : string;
  deleteOUrl : string;
  http : HttpClient ;


  constructor(http: HttpClient) {
    this.http=http;
    this.viewOUrl='http://localhost:2023/viewO';
    this.addOUrl='http://localhost:2023/addOrder';
    this.updateOUrl='http://localhost:2023/updateOrder';
    this.deleteOUrl='http://localhost:2023/deleteOrder';
  }

  public viewAllOrders(): Observable<Orders[]>{
    return this.http.get<Orders[]>(this.viewOUrl);
  }
  public addOrder(order : Orders){
    return this.http.post<Event>(this.addOUrl,order);
  }
  public updateOrder(order: Orders){
    return this.http.put<Orders>(this.updateOUrl+"/"+order.eventCode,order);
  }
  public deleteOrder(order: Orders){
    return this.http.delete(this.deleteOUrl+"/"+order.eventCode);
  }
}

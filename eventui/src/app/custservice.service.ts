import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustserviceService {
  viewCUrl : string;
  addCUrl : string;
  updateCUrl : string;
  custSignUrl : string
  http : HttpClient ;
  constructor(http:HttpClient) {
    this.http=http;
    this.viewCUrl='http://localhost:2023/viewCustomers';
    this.addCUrl='http://localhost:2023/addCustomer';
    this.updateCUrl='http://localhost:2023/updateCPass';
    this.custSignUrl="http://localhost:2023/custLogin";

   }

   public viewAllCustomers(): Observable<Customer[]>{
    return this.http.get<Customer[]>(this.viewCUrl);
  }
  public addCustomer(cust : Customer){
    return this.http.post<Customer>(this.addCUrl,cust);
  }
  public updateCEvent(cust: Customer){
    return this.http.put<Customer>(this.updateCUrl+"/"+cust.custName,cust);
  }
  public custLogin(cust : Customer){
    return this.http.get<boolean>(this.custSignUrl+"/"+cust.custName+"/"+cust.custPassword);
  }
}

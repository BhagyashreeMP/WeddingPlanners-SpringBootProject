import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from './admin';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
  adminUrl : string;
  http : HttpClient ;


  constructor(http: HttpClient) { 
    this.http=http;
    this.adminUrl="http://localhost:2023/adminLogin";
  }

  public adminLogin(admin : Admin){
    return this.http.get<boolean>(this.adminUrl+"/"+admin.username+"/"+admin.password);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustserviceService } from '../custservice.service';

@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css']
})
export class CustloginComponent {
  service : CustserviceService;
  cust : Customer;
  
  constructor(service: CustserviceService, private router : Router){
    this.service = service;
    this.cust = new Customer();
}  

checkCLogin(){
this.service.custLogin(this.cust).subscribe((data)=>{
  if(data == true){
      console.log("hi");

      this.redirectToView();
    }else{
      alert('Invalid Details');
      this.redirectToCustLogin();
    }
  });
}
redirectToView(){
  this.router.navigate(['showEvents']).then(()=>{
    window.location.reload();
  });
}

redirectToCustLogin(){
  this.router.navigate(['custLogin']).then(()=>{
    window.location.reload();
  });
}
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent{
  service: AdminserviceService;
  admin :Admin;
  
  constructor(service: AdminserviceService, private router :Router){
    this.service = service;
    this.admin = new Admin();
}  

checkLogin(){
this.service.adminLogin(this.admin).subscribe((data)=>{

    if(data == true){
      console.log("hi");

      this.redirectToView();
    }else{
      alert('Invalid Details');
      this.redirectToAdminLogin();
    }
  });
}
redirectToView(){
  this.router.navigate(['adminSucces']).then(()=>{
    window.location.reload();
  });
}

redirectToAdminLogin(){
  this.router.navigate(['adminLogin']).then(()=>{
    window.location.reload();
  });
}
}
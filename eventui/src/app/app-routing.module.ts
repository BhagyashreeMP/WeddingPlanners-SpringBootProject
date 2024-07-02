import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VieweventsComponent } from './viewevents/viewevents.component'; 
import { AddeventComponent } from './addevent/addevent.component';
import { UpdateeventComponent } from './updateevent/updateevent.component';
import { DeleteeventComponent } from './deleteevent/deleteevent.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustloginComponent } from './custlogin/custlogin.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AdminsuccesComponent } from './adminsucces/adminsucces.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';
import { ViewordersComponent } from './vieworders/vieworders.component';
import { ShoweventsComponent } from './showevents/showevents.component';
import { CustsuccessComponent } from './custsuccess/custsuccess.component';
import { AddordersComponent } from './addorders/addorders.component';
import { ShowordersComponent } from './showorders/showorders.component';
import { UpdateorderComponent } from './updateorder/updateorder.component';
import { DeleteorderComponent } from './deleteorder/deleteorder.component';

const routes: Routes = [
  {path:'home', redirectTo:'/'},
  {path:'viewevents', component: VieweventsComponent},
  {path:'addEvent',component: AddeventComponent},
  {path:'updateEvent/:eventCode',component:UpdateeventComponent},
  {path:'deleteEvent/:eventCode',component:DeleteeventComponent},
  {path:'adminLogin',component:AdminloginComponent},
  {path:'custLogin',component:CustloginComponent},
  {path:'addCustomer',component:AddcustomerComponent},
  {path:'adminSucces',component:AdminsuccesComponent},
  {path:'viewAllCustomers',component:ViewcustomerComponent},
  {path:'viewAllOrders',component:ViewordersComponent},
  {path:'showEvents',component:ShoweventsComponent},
  {path:'custSuccess',component:CustsuccessComponent},
  {path:'addOrders',component:AddordersComponent},
  {path:'showOrders',component:ShowordersComponent},
  {path:'updateOrder/:eventCode',component:UpdateorderComponent},
  {path:'deleteOrder/:eventCode',component:DeleteorderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  declarations: [
    AppComponent,
    VieweventsComponent,
    AddeventComponent,
    UpdateeventComponent,
    DeleteeventComponent,
    AdminloginComponent,
    CustloginComponent,
    AddcustomerComponent,
    AdminsuccesComponent,
    ViewcustomerComponent,
    ViewordersComponent,
    ShoweventsComponent,
    CustsuccessComponent,
    AddordersComponent,
    ShowordersComponent,
    UpdateorderComponent,
    DeleteorderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
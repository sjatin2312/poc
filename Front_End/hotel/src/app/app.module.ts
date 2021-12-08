import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ManagerComponent } from './manager/manager.component';
import { ReceptionComponent } from './reception/reception.component';
import { OwnerComponent } from './owner/owner.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { CommonService } from './common.service';
import { FormsModule } from '@angular/forms';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { SuperService } from './super.service';
import {RoomsserviceService} from './roomsservice.service'
import { AddroomsComponent } from './addrooms/addrooms.component';
import { CustomerComponent } from './customer/customer.component';
import { PaymentComponent } from './payment/payment.component';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { MloginComponent } from './mlogin/mlogin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManagerComponent,
    ReceptionComponent,
    OwnerComponent,
    ContactsComponent,
    EmployeeComponent,
    RoomsComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    AddroomsComponent,
    CustomerComponent,
    PaymentComponent,
    AddcustomerComponent,
    MloginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SuperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { AddroomsComponent } from './addrooms/addrooms.component';
import { ContactsComponent } from './contacts/contacts.component';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { ManagerComponent } from './manager/manager.component';
import { MloginComponent } from './mlogin/mlogin.component';
import { OwnerComponent } from './owner/owner.component';
import { PaymentComponent } from './payment/payment.component';
import { ReceptionComponent } from './reception/reception.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  // {path:"manager/:employee",component:EmployeeComponent},
  // {path:"manager/:rooms",component:RoomsComponent},
  {path:"manager",component:ManagerComponent,
       children:[
         {
           path:'employee',component:EmployeeComponent,
           children:[
             { path:'addemployee',component:AddemployeeComponent},
             { path:'updateemployee',component:UpdateemployeeComponent}
             
           ]
         },
         {
          path:'rooms',component:RoomsComponent,
          children:[
            {path:'addrooms',component:AddroomsComponent}
          ]
         },
    
         {
           path:'mlogin',component:MloginComponent
         }
       ]
},
  {path:'reception',component:ReceptionComponent,
   children:[
    {path:'customer',component: CustomerComponent,
    children:[
      {path:'addcustomer', component:AddcustomerComponent}
    ]
  },
    {path:'payment',component:PaymentComponent}

   ]
},
  {path:'owner',component:OwnerComponent},
  {path:'contacts',component:ContactsComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

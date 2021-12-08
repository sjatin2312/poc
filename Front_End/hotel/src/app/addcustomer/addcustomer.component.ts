import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup  } from '@angular/forms';
import { SuperService} from '../super.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  alert:boolean = false;
addCustomer= new FormGroup({
  id: new FormControl(0),
  name:new FormControl(''),
  email:new FormControl(''),
  adults:new FormControl(0),
  childs:new FormControl(0),
  mobile:new FormControl(''),
  days:new FormControl(0)
  

})


constructor(private customer: SuperService) { }

ngOnInit(): void {
}
createCusto()
{
  // console.log(this.addRooms.value);
  this.customer.addCust(this.addCustomer.value).subscribe((result)=>
  {
    this.alert=true
    this.addCustomer.reset({})
    console.log("Get data from service",result);
    
  })
  
}
closeAlert()
{
  this.alert=false
}

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {SuperService } from '../super.service';
@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})

export class AddemployeeComponent implements OnInit {
  alert:boolean = false;
addEmployee= new FormGroup({
  id: new FormControl(0),
  name:new FormControl(''),
  email:new FormControl(''),
  age:new FormControl(0),
  gender:new FormControl(''),
  job_role:new FormControl(''),
  salary:new FormControl(0),
  phone_no:new FormControl('')

})
  constructor(private emp:SuperService) { }

  ngOnInit(): void {
  }
  createEmp()
  {
    // console.log(this.addEmployee.value);
    this.emp.addEmp(this.addEmployee.value).subscribe((result)=>
    {
      
      console.log("Get Data From Service",result);
      this.alert = true;
      this.addEmployee.reset({});
    })
    
  }
  closeAlert()
  {
    this.alert= false;
  }
}

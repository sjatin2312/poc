import { Component, OnInit } from '@angular/core';
import {SuperService } from '../super.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
public collection:any;
  constructor( private superservice:SuperService) { }

  ngOnInit(): void {
    this.superservice.getEmployeeList().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection);
      
    });
  }

 

}

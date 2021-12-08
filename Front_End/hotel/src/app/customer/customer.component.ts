import { Component, OnInit } from '@angular/core';
import {SuperService } from '../super.service';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  public collection:any;
  constructor( private superservice:SuperService) { }

  ngOnInit(): void {
    this.superservice.getCustomerList().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection);
      
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SuperService} from '../super.service';

@Component({
  selector: 'app-addrooms',
  templateUrl: './addrooms.component.html',
  styleUrls: ['./addrooms.component.css']
})
export class AddroomsComponent implements OnInit {

  alert: boolean=false

addRooms= new FormGroup({
  id:new FormControl(0),
  ava:new FormControl(''),
  clean:new FormControl(''),
  beds:new FormControl(""),
  type:new FormControl(''),
  price:new FormControl(0)
}
  )





  constructor(private room: SuperService) { }

  ngOnInit(): void {
  }
  createResto()
  {
    // console.log(this.addRooms.value);
    this.room.addR(this.addRooms.value).subscribe((result)=>
    {
      this.alert=true
      this.addRooms.reset({})
      console.log("Get data from service",result);
      
    })
    
  }
  closeAlert()
  {
    this.alert=false
  }

}

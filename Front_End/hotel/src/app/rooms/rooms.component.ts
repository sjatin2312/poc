import { Component, OnInit } from '@angular/core';
import { SuperService} from '../super.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
public collection:any;
  constructor( private superService: SuperService) { }

  ngOnInit(): void {

    this.superService.getRoomsList().subscribe((result)=>{
      this.collection=result;
      console.log(this.collection);
      
    });
  }

}

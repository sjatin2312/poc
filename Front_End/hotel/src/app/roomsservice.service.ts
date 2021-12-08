import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsserviceService {
Link1="http://localhost:9002/rooms/findAllrooms"
  constructor(private http:HttpClient) { }
  getRoomsList()
  {
  // console.log("Working");
  return this.http.get(this.Link1);
  
  }
}

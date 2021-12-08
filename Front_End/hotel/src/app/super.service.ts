import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperService {
URL="http://localhost:9003/employee/findAllemployee"
URL1="http://localhost:9003/employee/addemployee"
URL2="http://localhost:9002/rooms/findAllrooms"
URL3="http://localhost:9002/rooms/addrooms"
URL4="http://localhost:8081/customer/findAllcustomer"
URL5="http://localhost:8081/customer/addcustomer"

  constructor(private _http:HttpClient) { }
  getEmployeeList()
  {
   return this._http.get(this.URL);
    
  }

  addEmp(data: any)
  {
    return this._http.post(this.URL1,data);
  }

  public login(username:string,password:string)
  {const headers=new HttpHeaders({Authorization: 'Basic' +btoa(username+":"+password)})
    return this._http.get("http://localhost:9004/",{headers,responseType:'text'as'json'});
  }
  
  getRoomsList()
  {
 return this._http.get(this.URL2);
    
  }

  addR(data: any)
  {
    return this._http.post(this.URL3,data)
  }
 

    getCustomerList()
    {
      return this._http.get(this.URL4);

    }
    addCust(data: any)
    {
      return this._http.post(this.URL5,data)
    }
}

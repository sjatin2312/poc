import { Component, OnInit } from '@angular/core';
import { SuperService } from '../super.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 email:string | undefined;
 password:string | undefined;
  router: any;

  constructor(private service:SuperService) { }

  ngOnInit(): void {
  }

login()
{
  if(this.email=="manager@hotel.com" && this.password=="manager")
  {
    
    alert("Manager Login Succesful...");
     this.router.navigate[("../employee")]
    
  }
  else
  {
    alert("Please Enter Valid details...");
  }
}

  // dologin()
  // {
  //  let resp= this.service.login(this.username,this.password);
  //   resp.subscribe(data=>{
  //     console.log(data)
      
  //   })
  // }

}

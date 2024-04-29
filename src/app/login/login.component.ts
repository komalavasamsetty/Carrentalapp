import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:any;
  password:any;
  user:any;
  status:any;

  constructor(private router:Router){}
  checkLogin(){
    if(this.validatePassword()){
      this.user={
        "username":this.username,
        "password":this.password

      };
      
      localStorage.setItem("loggedInuser", JSON.stringify(this.user));
      this.router.navigateByUrl("/admin/home");
    }
    else if (this.password=="6300"){
this.router.navigateByUrl("/customer/home")
    }
    // else{
    //   alert("Invalid username or password");
    // }
  }
  validatePassword(){
    var reqpwd=this.username.substring(0,3)+"123";
    if(reqpwd==this.password){
      return true;

    }
    else{
      return false;
    }
  }
}
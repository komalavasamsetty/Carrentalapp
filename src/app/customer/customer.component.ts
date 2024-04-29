import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carservices } from '../services/cars.service';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {
  user:any;
  username:any;
  cartlength:any;
  constructor(private router:Router, private service:AdminService){}
  logout(){
    localStorage.removeItem("loggedInUser");
    this.router.navigateByUrl('');
  }
  ngDoCheck(){
    this.cartlength=this.service.getLength();
  }
  ngOnInit(){
    if(localStorage.getItem("loggedInUser")){
  this.username
  this.user=localStorage.getItem("loggedInUser");
  this.username=JSON.parse(this.user).username;
    }
    // if(localStorage.getItem('user')!=null){
    //   this.user=JSON.parse(localStorage.getItem('user')||'{}');
    //   this.username=this.user.username;
    else {
      this.router.navigateByUrl("/");
    }
    }
      
    }
  


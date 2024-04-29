import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  username :any;
  user:any;
  constructor(private bs:Router){}
  logout(){
    localStorage.removeItem("loggedInuser");
    this.bs.navigateByUrl('');
  }
  ngOnInit(){
    if(localStorage.getItem("loggedInuser")){
      this.user=localStorage.getItem("loggedInuser");
    this.username=JSON.parse(this.user).username;
  }
  else{
    this.bs.navigateByUrl('');
  }
  }}





import { Component } from '@angular/core';
import { Carservices } from '../services/cars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrl: './addcar.component.css'
})
export class AddcarComponent {
  carId:any;
  carName:any;
  carPerHour:any;
  carPerDay:any;
  carPrice:any;
  carImage:any;
  newCar:any;
  constructor(private service:Carservices, private router:Router){}
  
  addCars(){
    this.newCar={
    carId:this.carId,
    carName:this.carName,
    carPerHour:this.carPerHour,
    carPerDay:this.carPerDay,
    carPrice:this.carPrice,
    carImage:this.carImage
    }
    this.service.addCars(this.newCar);
      this.router.navigateByUrl("/admin/carlist")
  }
  }


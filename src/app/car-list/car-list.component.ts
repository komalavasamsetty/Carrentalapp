import { Component } from '@angular/core';
import { Carservices } from '../services/cars.service';
import { Car } from '../services/car';
import { AdminService } from '../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'] 
})

export class CarListComponent {
  constructor(private prod:Carservices, private cart:AdminService){}
  cars:any;
  addtoCart(p:any){
    this.cart.addItemtoCart(p);
    Swal.fire({
      title: "Good job!",
      text: "add to cart sucessful",
      icon: "success"
    });
    alert('your product has been added to the cart');
  }
  ngOnInit(){
    this.prod.getCars().subscribe((res)=>{
      this.cars=res;
    })
  }
}
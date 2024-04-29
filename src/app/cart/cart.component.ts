import { Component } from '@angular/core';
import { AdminService } from '../services/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(private cart:AdminService){}
  
  cartitems:any;
  totalprice:any;
  cartlength:any;
  ngDoCheck(){
    this.cartlength=this.cart.getLength();
    this.totalprice=this.cart.getTotal();
  }
  ngOnInit(){
    this.cart.getItems().subscribe((res)=>{
      this.cartitems=res;
      console.log(this.cartitems);
  
    })

  }
  delete(c:any){
this.cart.deleteCarFromCrat(c);
  }
  onSubmit(){
    Swal.fire({
      title: "Good job!",
      text: "thank you for booking",
      icon: "success"
    });
  }
  }
  


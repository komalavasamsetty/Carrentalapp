import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor() { }
  cartitems:Car[]=[];
  addItemtoCart(car:Car){
this.cartitems.push(car);
  }
  getItems(){
    return of(this.cartitems)
  }
  getLength(){
    return this.cartitems.length;
  }
  getTotal(){
    let total=0;
    for(let i=0; i<this.cartitems.length; i++){
total+=this.cartitems[i].carPrice;
    }
    return total;
  }
  deleteCarFromCrat(cartIndex:Car){
    let res=this.cartitems.findIndex(p=>p.carName==cartIndex.carName)
    this.cartitems.splice(res,1);

  }
}

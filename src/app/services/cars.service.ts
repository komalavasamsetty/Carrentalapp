import { Injectable } from '@angular/core';
import { Car } from './car';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Carservices {
  deleteCar: any;
  addItemtoCart(pro: Car) {
    throw new Error('Method not implemented.');
  }
  addCar: any;

  constructor() { }
  car:Car[]=[
    {
      carId: 1,
      carName: 'Toyota Corolla',
      carPerHour: 20,
      carPerDay: 150,
      carImage: "https://upload.wikimedia.org/wikipedia/commons/e/e6/2015_Toyota_Corolla_S.jpg",
      carType: 'Sedan',
      carPrice:"2000",
      carEdit:false,
    },
    {
      carId: 2,
      carName: 'Ford Explorer',
      carPerHour: 30,
      carPerDay: 200,
      carImage: "https://upload.wikimedia.org/wikipedia/commons/2/23/Ford_Explorer_%28sixth_generation%29_IMG_6063.jpg",
      carType: 'SUV',
      carPrice:"2000",
      carEdit:false,
    },
    {
      carId: 3,
      carName: 'Maruti Suzuki',
      carPerHour: 30,
      carPerDay: 200,
      carImage: "https://www.rushlane.com/wp-content/uploads/2020/06/maruti-swift-facelift-india-launch.jpg",
      carType: 'MUV',
      carPrice:"2000",
      carEdit:false,
    },
    {
      carId: 4,
      carName: 'Maruti Suzuki',
      carPerHour: 30,
      carPerDay: 200,
      carImage: "https://imgd.aeplcdn.com/370x208/n/cw/ec/135523/eeco-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
      carType: 'Eceo',
      carPrice:"2000",
      carEdit:false,
    },
    {
      carId: 5,
      carName: 'Maruti Suzuki',
      carPerHour: 30,
      carPerDay: 200,
      carImage: "https://qph.cf2.quoracdn.net/main-qimg-a643b8a944437bd69bab7efacfac42bf-lq",
      carType: 'MUV800',
      carPrice:"2000",
      carEdit:false,
    },
    {
      carId: 6,
      carName: 'Maruti Suzuki',
      carPerHour: 30,
      carPerDay: 200,
      carImage: "https://gaadiwaadi.com/wp-content/uploads/2016/09/Maruti-Ritz-e1473480947732.jpg",
      carType: "Ritz",
      carPrice:"2000",
      carEdit:false,
    },
   
  ];
  getCars(){
    return of(this.car);
  }
    addCars(car:Car){
  this.car.push(car);
    }
    deleteCars(pro:Car){
      let res=this.car.findIndex(p=>p.carId==pro.carId);
      this.car.splice(res,1)
    }
    updateCar(pro:Car){
      let res=this.car.findIndex(p=>p.carId==pro.carId);
      this.car.splice(res,1,pro);
  
    }
  
  }
  
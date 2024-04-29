import { Component } from '@angular/core';
import { Carservices } from '../services/cars.service';

@Component({
  selector: 'app-managecar',
  templateUrl: './managecar.component.html',
  styleUrl: './managecar.component.css'
})
export class ManagecarComponent {
  constructor(private service:Carservices){}
  delete(p:any){
  this.service.deleteCars(p);
    alert("car delete successfully")
  }
  toSave(p:any){
  p.carEdit=false;
  this.service.updateCar(p);
  alert("details edited successfully");
  }
  toUpdate(p:any){
    p.carEdit=true;
  }
  cars:any;
  ngOnInit(){
    this.service.getCars().subscribe((res)=>{
      this.cars=res;
    })
  }
  }
  


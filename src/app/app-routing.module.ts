import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CarListComponent } from './car-list/car-list.component';
import { CustomerComponent } from './customer/customer.component';
import { AddcarComponent } from './addcar/addcar.component';
import { CartComponent } from './cart/cart.component';
import { ManagecarComponent } from './managecar/managecar.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'customer', component:CustomerComponent,
  children:[
    {path:'home', component:HomeComponent},
    {path:'carlist', component:CarListComponent},
    {path:'cart', component:CartComponent},
    {path:'', component:LoginComponent}
  ]
  },
  {path:'admin', component:AdminDashboardComponent,
  children:[
    {path:'home', component:HomeComponent},
    {path:'carlist', component:CarListComponent},
    {path:'car', component:AddcarComponent},
    {path:'managecar', component:ManagecarComponent}
  
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

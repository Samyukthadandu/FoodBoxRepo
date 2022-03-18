import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { FoodsComponent } from './admin/foods/foods.component';
import { ShopfoodComponent } from './shopfood/shopfood.component';
import { SearchfoodComponent } from './searchfood/searchfood.component';
import { LoginComponent } from './login/login.component';
import {AdminpageComponent} from './adminpage/adminpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { NewregistrationComponent } from './newregistration/newregistration.component';

const routes: Routes = [
  {path: '', component: UserloginComponent},
  {path: 'userlogin', component:UserloginComponent},
  {path: 'login', component:LoginComponent},
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/foods', component: FoodsComponent },
  { path: 'shop', component: ShopfoodComponent },
  {path:'search', component:SearchfoodComponent},  
  {path: 'logout', component: LoginComponent},
  {path:'adminpage',component:AdminpageComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'register',component:NewregistrationComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

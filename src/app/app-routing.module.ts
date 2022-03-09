import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './admin/users/users.component';
import { FoodsComponent } from './admin/foods/foods.component';
import { ShopfoodComponent } from './shopfood/shopfood.component';
import { SearchfoodComponent } from './searchfood/searchfood.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/foods', component: FoodsComponent },
  { path: 'shop', component: ShopfoodComponent },
  {path:'search', component:SearchfoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

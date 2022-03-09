import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
//import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './admin/users/users.component';

import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { FoodsComponent } from './admin/foods/foods.component';
import { AddfoodComponent } from './admin/foods/addfood/addfood.component';
import { ViewfoodComponent } from './admin/foods/viewfood/viewfood.component';
import { ShopfoodComponent } from './shopfood/shopfood.component';
import { CartitemComponent } from './shopfood/cartitem/cartitem.component';
import { SearchfoodComponent } from './searchfood/searchfood.component';
import { FilterpipePipe } from './filterpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
   // FooterComponent,
    UsersComponent,
   AdduserComponent,
   ViewuserComponent,
   FoodsComponent,
   AddfoodComponent,
   ViewfoodComponent,
   ShopfoodComponent,
   CartitemComponent,
   SearchfoodComponent,
   FilterpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

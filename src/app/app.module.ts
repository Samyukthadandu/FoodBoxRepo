import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
//import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './admin/users/users.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { FoodsComponent } from './admin/foods/foods.component';
import { AddfoodComponent } from './admin/foods/addfood/addfood.component';
import { ViewfoodComponent } from './admin/foods/viewfood/viewfood.component';
import { ShopfoodComponent } from './shopfood/shopfood.component';
import { CartitemComponent } from './shopfood/cartitem/cartitem.component';
import { SearchfoodComponent } from './searchfood/searchfood.component';
import { FilterpipePipe } from './filterpipe.pipe';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorServiceService } from './login/http-interceptor-service.service';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { NewregistrationComponent } from './newregistration/newregistration.component';
import { SortpipePipe } from './sortpipe.pipe';

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
   FilterpipePipe,
   LoginComponent,
   AdminpageComponent,
   UserloginComponent,
   RegisterpageComponent,
   LoginsuccessComponent,
   NewregistrationComponent,
   SortpipePipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorServiceService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, Input, OnInit } from '@angular/core';
import {User} from 'src/app/user.model';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  user: User =new User();
  msg='';
  

  constructor(private service:RegistrationService,private router:Router ) { }

    

  ngOnInit(){}

  loginUser(){
  this.service.loginUserFromRemote(this.user).subscribe(
    data =>{
       console.log("Response received");
      this.router.navigate(['/shop'])
    },
    error =>{
      console.log("Exception occured");
      this.msg="WrongCredentials,Please Enter Valid Email and Password";
  })
}

goToRegistration(){
  this.router.navigate(['/register']);
}
}
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';
import { User } from '../user.model';

@Component({
  selector: 'app-newregistration',
  templateUrl: './newregistration.component.html',
  styleUrls: ['./newregistration.component.css']
})
export class NewregistrationComponent implements OnInit {


 user: User =new User();
  msg='';
  //message!: string;
  constructor(private service:RegistrationService ,private router:Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.user.type="user";
    this.service.registerUserfromRemote(this.user).subscribe(
      data=>{
        console.log("Response Received");
        this.msg="Registration Successful";
      },
      error=>{
        console.log("Exception Occured");
        this.msg=error.error;
      }
    )
  }

}

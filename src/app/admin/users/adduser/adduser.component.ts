import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {User} from 'src/app/user.model';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Router } from '@angular/router';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  @Input()
  user!: User;
  @Output()
  userAddedEvent = new EventEmitter();

  newUser!: User;
  message!: string;
  password!: string;

 constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit() {
    this.user.type='admin';

    this.newUser = Object.assign({}, this.user);
  }

  addUser() {
    this.user.type='admin';
    this.httpClientService.addUser(this.user).subscribe(
      (user) => {
        this.userAddedEvent.emit();
        this.router.navigate(['admin', 'users']);
      }
    );
  }

  
}

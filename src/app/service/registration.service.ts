import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http:HttpClient) { }


public loginUserFromRemote(user:User):Observable<any>{
  return this.http.post<any>("http://localhost:8087/loginuser",user);
}
public registerUserfromRemote(user:User):Observable<any>{
  return this.http.post<any>("http://localhost:8087/registeruser",user);
}
}
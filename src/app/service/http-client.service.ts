import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user.model';
import { Food } from '../food.model';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  getUsers()
  {
    console.log('Getting all users');
    return this.httpClient.get<User[]>('http://localhost:8087/users/get');
  }

  addUser(newUser: User) {

    console.log('Adding the Userd');
    console.log(newUser);
    return this.httpClient.post<User>('http://localhost:8087/users/add', newUser);   
}
deleteUser(id:any) {
  return this.httpClient.delete<User>('http://localhost:8087/users/' + id);
}

getFoods() {
  return this.httpClient.get<Food[]>('http://localhost:8087/foods/get');
}

addUploadData(selectedFile:any) {
  return this.httpClient.post('http://localhost:8087/foods/upload', selectedFile);
}

addFood(newFood: Food) {
  return this.httpClient.post<Food>('http://localhost:8087/foods/add', newFood);
}
deleteFood(id:any) {
  return this.httpClient.delete<Food>('http://localhost:8087/foods/' + id);
}
updateFood(updatedFood: Food) {
  return this.httpClient.put<Food>('http://localhost:8087/foods/update', updatedFood);
}
}

import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { FilterpipePipe } from '../filterpipe.pipe';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-searchfood',
  templateUrl: './searchfood.component.html',
  styleUrls: ['./searchfood.component.css']
})
export class SearchfoodComponent implements OnInit {

  filteredString:string='';
  foods: Food[] =[];
  foodsRecieved!: Array<Food>;

  cartFoods: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit() {
    this.httpClientService.getFoods().subscribe(
      response => this.handleSuccessfulResponse(response),
     ) };
  
   // we will be taking the foods response returned from the database
  // and we will be adding the retrieved   
  handleSuccessfulResponse(response:any) {
    this.foods = new Array<Food>();
    //get foods returned by the api call
    this.foodsRecieved = response;

    for (const food of this.foodsRecieved) {

      const foodwithRetrievedImageField = new Food();
      foodwithRetrievedImageField.id = food.id;
      foodwithRetrievedImageField.name = food.name;
      //populate retrieved image field so that book image can be displayed
      foodwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + food.picByte;
      foodwithRetrievedImageField.category = food.category;
      foodwithRetrievedImageField.restaurant = food.restaurant;
      foodwithRetrievedImageField.price = food.price;
      foodwithRetrievedImageField.picByte = food.picByte;
      this.foods.push(foodwithRetrievedImageField);
    }
  }

 
  }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { Food } from '../food.model';

@Component({
  selector: 'app-shopfood',
  templateUrl: './shopfood.component.html',
  styleUrls: ['./shopfood.component.css']
})
export class ShopfoodComponent implements OnInit {

  cartItems:any=[
  
  ];
  cartTotals=0;
  food='';
  foods: Array<Food>=[];
  foodsRecieved!: Array<Food>;
  searchFood='';
  SortbyParam='';
  SortDirection='asc';

  cartFoods: any;

  constructor(private router: Router, private httpClientService: HttpClientService) { }
 

  ngOnInit() {
   // this.cartFoods=[];
    this.httpClientService.getFoods().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
   

    //from localstorage retrieve the cart item
   let data = localStorage.getItem('cart');
   //if this is not null convert it to JSON else initialize it as empty
   if (data !== null) {
     this.cartFoods = JSON.parse(data);
   } else {
     this.cartFoods = [];
   }
 }
  

   

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

  addToCart(foodId:any) {
    //retrieve food from foods array using the food id
    let food:any = this.foods.find(food => {
      return food.id === +foodId;
    });
    let cartData = [];
    //retrieve cart data from localstorage
    let data = localStorage.getItem('cart');
    //prse it to json 
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    // add the selected book to cart data
    cartData.push(food);
    //updated the cartBooks
    this.updateCartData(cartData);
    //save the updated cart data in localstorage
    localStorage.setItem('cart', JSON.stringify(cartData));
    //make the isAdded field of the food added to cart as true
    food.isAdded= true;
  }

  updateCartData(cartData:any) {
    this.cartFoods = cartData;
  }

  /*cartTotal() {
    this.cartTotals = 0
  this.cartItems.forEach((item: { price: number; }) => {
    this.cartTotals += (1 * item.price)
  })
    //this.router.navigate(['/cart']);
  }*/

  emptyCart() {
    this.cartFoods = [];
    localStorage.clear();
  }
  onFoodFilter(){
    console.log("im in onFoodFilter()");
    this.searchFood=this.food;
  }
  onFoodFilterClear(){
    this.searchFood='';
    this.food='';
  }

  onSortDirection(){
    if(this.SortDirection ==='desc'){
      this.SortDirection ='asc';
    }else{
      this.SortDirection ='desc';
    }
  }

}

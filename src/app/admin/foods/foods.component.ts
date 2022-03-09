import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/food.model';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit {

  foods!: Array<Food>;
  foodsRecieved!: Array<Food>;
  selectedFood: Food = new Food;
  action!: string;
  

  constructor(private httpClientService: HttpClientService,private activedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loadData() ;
  }

 loadData(){
      this.httpClientService.getFoods().subscribe(
        response => this.handleSuccessfulResponse(response)
      );

  this.activedRoute.queryParams.subscribe(
    (params) => {
      const id =params['id'];
      this.action = params['action'];
      if (id) {
      this.selectedFood = this.foods.find(food => {
          return food.id === +id;
        })!;
     }
    }
  );
 }


  handleSuccessfulResponse(response: Food[]) {
   // this.foods = response;
    this.foods = new Array<Food>();
    this.foodsRecieved = response;
    for (const food of this.foodsRecieved) {
    
      const foodwithRetrievedImageField = new Food();
      foodwithRetrievedImageField.id = food.id;
      foodwithRetrievedImageField.name = food.name;
      foodwithRetrievedImageField.retrievedImage = 'data:image/jpeg;base64,' + food.picByte;
      foodwithRetrievedImageField.category = food.category;
      foodwithRetrievedImageField.restaurant = food.restaurant;
      foodwithRetrievedImageField.price = food.price;
      foodwithRetrievedImageField.picByte=food.picByte;
      this.foods.push(foodwithRetrievedImageField);
    }
  }
  addFood() {
    this.selectedFood = new Food();
    this.router.navigate(['admin', 'foods'], { queryParams: { action: 'add' } });
  } 

  viewFood(id: number) {
    this.router.navigate(['admin', 'foods'], { queryParams: { id, action: 'view' } });

}
 }
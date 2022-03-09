import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/food.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../../../service/http-client.service';

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css']
})
export class ViewfoodComponent implements OnInit {

  @Input()
  food!: Food;

  @Output()
  foodDeletedEvent = new EventEmitter();

  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
  }
  deleteFood() {
    this.httpClientService.deleteFood(this.food.id).subscribe(
      (food) => {
        this.foodDeletedEvent.emit();
        this.router.navigate(['admin', 'foods']);
      }
    );
  }
  editFood() {
    this.router.navigate(['admin', 'foods'], { queryParams: { action: 'edit', id: this.food.id } });
  }


}

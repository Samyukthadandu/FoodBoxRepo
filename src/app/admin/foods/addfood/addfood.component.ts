import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from 'src/app/food.model';
import { HttpClientService } from 'src/app/service/http-client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {
  @Input()
  food!: Food;

  @Output()
  foodAddedEvent = new EventEmitter();

  private selectedFile:any;
  imgURL: any;

  constructor(private httpClientService: HttpClientService,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  public onFileChanged(event:any) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }
    saveFood() {
      if (this.food.id == null) {
           const uploadData = new FormData();
           uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
           this.selectedFile.imageName = this.selectedFile.name;
  
           this.httpClient.post('http://localhost:8087/foods/upload', uploadData, { observe: 'response' })
           .subscribe((response) => {
              if (response.status === 200) {
              this.httpClientService.addFood(this.food).subscribe(
              (food:any) => {
                this.foodAddedEvent.emit();
                this.router.navigate(['admin', 'foods']);
              }
            );
            console.log('Image uploaded successfully');
          } else {
            console.log('Image not uploaded successfully');
          }
        }
        );
      } else {
        this.httpClientService.updateFood(this.food).subscribe(
          (food) => {
            this.foodAddedEvent.emit();
            this.router.navigate(['admin', 'foods']);
          }
        );
      }
    }  

}


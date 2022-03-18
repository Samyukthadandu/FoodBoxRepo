import { Component, OnInit } from '@angular/core';
import { Food } from '../food.model';
import { FilterpipePipe } from '../filterpipe.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-searchfood',
  templateUrl: './searchfood.component.html',
  styleUrls: ['./searchfood.component.css']
})
export class SearchfoodComponent implements OnInit {

  searchTerm!: string;
  foods!: Array<Food>;
  food!: string;
  

  

  constructor(private route: ActivatedRoute, private router:Router) { }
   foodname!: string;
  ngOnInit():void {
 
    
    }
    onClick(food:any):void{
      
    
    }
   
 
  }


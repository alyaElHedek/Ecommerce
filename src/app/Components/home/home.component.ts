import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Category } from '../Interface/category';
import { AllproductsService } from 'src/app/Services/allproducts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  
  allCategories:Category[]=[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 6
      },
    
    }, 
    nav: true
  }

  constructor(private _allproductsService:AllproductsService){
  
  }
  
  ngOnInit(): void {
      this.getCategories();
  }
  
  getCategories(){
    this._allproductsService.getCategories().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.allCategories=response.data; 
      }
    })
  }




}

import { Component, OnInit } from '@angular/core';
import { Category } from '../Interface/category';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllproductsService } from 'src/app/Services/allproducts.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  allCategories:Category[]=[];

  // showSlider:boolean=false;

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
  
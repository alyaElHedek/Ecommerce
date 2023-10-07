import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../Interface/category';
import { AllproductsService } from 'src/app/Services/allproducts.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent {

  categoryId:string="";
  subCategories:Category = {} as Category;


  constructor(private _activatedRoute:ActivatedRoute , private _allproductsService:AllproductsService){

this._activatedRoute.paramMap.subscribe((response:any)=>{
  console.log(response);
  this.categoryId=response.params.id;
})

this._allproductsService.getAllSubCategoriesOnCategory(this.categoryId).subscribe({
  next:(res)=>{
    console.log(res.data);
    this.subCategories=res.data;
  }
})

  }


 

}

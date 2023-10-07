import { Component, OnInit,Injectable} from '@angular/core';
import { Product } from '../Interface/product';
import { AllproductsService } from 'src/app/Services/allproducts.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {

  allProducts:Product[]=[];

  searchInput:string="";
  
  constructor(private _allproductsService:AllproductsService){

  }

ngOnInit(): void {
    this.getAllProducts();
}


getAllProducts(){
  this._allproductsService.getAllProducts().subscribe({
    next:(response)=>{
      console.log(response);
      this.allProducts=response.data;
    }
  });
}

}

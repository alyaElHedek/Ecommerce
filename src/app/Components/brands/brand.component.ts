import { Component } from '@angular/core';
import { Brand } from '../Interface/brand';
import { AllproductsService } from 'src/app/Services/allproducts.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  allBrands:Brand[]=[];

  constructor(private _allproductsService:AllproductsService){
  
  }
  
  ngOnInit(): void {
      this.getBrands();
  }
  
  getBrands(){
    this._allproductsService.getBrands().subscribe({
      next:(response)=>{
        console.log(response.data);
        this.allBrands=response.data; 
      }
    })
  }


}

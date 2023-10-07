import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../Interface/product';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AllproductsService } from 'src/app/Services/allproducts.service';
import { CartService } from 'src/app/Shared/Services/cart.service';
import { WishListService } from 'src/app/Shared/Services/wish-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent {
  
  heartIcon:boolean=false;

  productId:string="";
  productDetailsData:Product = {} as Product;

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
        items: 1
      },
    
    },
    nav: true
  }

  constructor(private _activatedRoute:ActivatedRoute,private _allproductsService:AllproductsService,private _cartService:CartService,private _wishListService:WishListService){
    
 this._activatedRoute.paramMap.subscribe((response:any) =>{
  // console.log(response.params.id);
  this.productId=response.params.id
 })

this._allproductsService.getProductById(this.productId).subscribe({
  next:(res) => {
    console.log(res.data);
    this.productDetailsData=res.data;
    
  }
  
})


  }

  addToCart(id:string){
    return this._cartService.addToCart(id).subscribe({
      next:(response)=>{
        console.log(response);
        
      }
    })
      }

      addToWishList(id:string){
        return this._wishListService.addToWishList(id).subscribe({
          next:(response)=>{
            console.log(response);
            if(response.status=='success'){
              this.heartIcon=true;
    
            }
        
          }
        })
          }
      
}

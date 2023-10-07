import { Component, Input } from '@angular/core';
import { Product } from '../Interface/product';
import { CartService } from 'src/app/Shared/Services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { WishListService } from 'src/app/Shared/Services/wish-list.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {

  heartIcon:boolean=false;

  @Input() product:Product = {} as Product;

  constructor(private _cartService:CartService,private _toastr: ToastrService,private _wishListService:WishListService){}

  addToCart(id:string){
return this._cartService.addToCart(id).subscribe({
  next:(response)=>{
    console.log(response);
    this._toastr.success(response.message)
    this._cartService.cartItemsNumber.next(response.numOfCartItems)

  }
})
  }

  addToWishList(id:string){
    return this._wishListService.addToWishList(id).subscribe({
      next:(response)=>{
        console.log(response);
        this._toastr.success(response.message)
        this._cartService.cartItemsNumber.next(response.numOfCartItems)
        if(response.status=='success'){
          this.heartIcon=true;

        }
    
      }
    })
      }


}

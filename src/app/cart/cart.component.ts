import { Component, OnInit } from '@angular/core';
import { CartService } from '../Shared/Services/cart.service';
import { Cart } from './Interface/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartData:Cart={} as Cart ;

  constructor(private _cartService:CartService){}
ngOnInit(): void {
    this.getCartItems()
}

getCartItems(){
  this._cartService.getCartItems().subscribe({
    next:(response)=>{
      console.log(response);
      this.cartData=response;

    }
  })
}


removeItem(id:string){
  this._cartService.removeItem(id).subscribe({
    next:(response)=>{
      console.log(response);
      this.cartData=response;
      this._cartService.cartItemsNumber.next(response.numOfCartItems)
    }
  })
}


updateItemsCount(id:string,count:number){
  
  if(count>0){
    
      this._cartService.updateItemsCount(id,count).subscribe({
        next:(response)=>{
          console.log(response);
          this.cartData=response;
          
        }
      })
    

  }
}


clearCart(){
  this._cartService.clearCart().subscribe({
    next:(response)=>{

      if(response.message==="success") {
        this.cartData={};
        this._cartService.cartItemsNumber.next(response.numOfCartItems)

      }

      console.log(response);

    }
  })
}


}  

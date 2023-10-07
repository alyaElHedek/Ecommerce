import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/Shared/Services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

  errorMsg:string='';
  cartId:string=''

  shippingAddress: FormGroup = new FormGroup({
    details: new FormControl('',[Validators.required,Validators.minLength(3)]),
    phone: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)]),
    city: new FormControl('',[Validators.required])
  })


  constructor(private _cartService:CartService){

this._cartService.cartId.subscribe(response =>{
  this.cartId=response;
})

  }

onlinePayment(){
console.log(this.shippingAddress);

this._cartService.onlinePayment(this.cartId,this.shippingAddress.value).subscribe({
  next:(response)=>{
    // console.log(response);
    if(response.status==="success"){
      console.log(response.session.url);
      window.location.href=response.session.url;
    }
  }
})

 }



}

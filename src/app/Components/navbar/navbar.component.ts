import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Shared/Services/cart.service';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartItemsNumber:number=0;

isLoggedIn:boolean=false;

constructor(private _authService:AuthService,private _cartService:CartService){
  

this._authService.userData.subscribe((response)=>{
  console.log(response);

  if(this._authService.userData.getValue()){
    this.isLoggedIn = true;
  }else{
    this.isLoggedIn = false;
  }
  
})






}


ngOnInit(): void {
  
  this._cartService.cartItemsNumber.subscribe({
    next:(response)=>{
      console.log(response);
      this.cartItemsNumber=response;
    }
  })



  this._cartService.getCartItems().subscribe({
    next:(response)=>{
      console.log(response);
      this.cartItemsNumber=response.numOfCartItems;

    }
  })

}




logout(){
  this._authService.logout();
}

}

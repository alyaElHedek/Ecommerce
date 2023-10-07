import { Component } from '@angular/core';
import { WishListService } from '../Shared/Services/wish-list.service';
import { WishList } from './Interface/wish-list';
import { CartService } from '../Shared/Services/cart.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  wishListData: WishList = {} as WishList;


  constructor(private _wishListService: WishListService, private _cartService: CartService) { }


  ngOnInit(): void {
    this.getWishListItems()
  }


  getWishListItems() {
    this._wishListService.getWishListItems().subscribe({
      next: (response) => {
        console.log(response);
        this.wishListData = response;

      }
    })
  }

  removeWishListItem(id: string) {
    this._wishListService.removeWishListItem(id).subscribe({
      next: (response) => {
        console.log(response);
        this.wishListData = response;
      }
    })
  }

  addToCart(id: string) {
    return this._cartService.addToCart(id).subscribe({
      next: (response) => {
        console.log(response);
        this.wishListData = response;
        this.removeWishListItem(id);

      }
    })
  }

}

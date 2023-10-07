import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService {

  baseURL:string="https://ecommerce.routemisr.com/api/v1/";

  constructor(private _httpClient:HttpClient) { }


  addToWishList(id:string):Observable<any>{
    return this._httpClient.post(`${this.baseURL}wishlist`,{productId:id},{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }




  
  getWishListItems():Observable<any>{
    return this._httpClient.get(`${this.baseURL}wishlist`,{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }


  removeWishListItem(id:string):Observable<any>{
    return this._httpClient.delete(`${this.baseURL}wishlist/${id}`,{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }

  addToCart(id:string):Observable<any>{
    return this._httpClient.post(`${this.baseURL}cart`,{productId:id},{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }

  
}

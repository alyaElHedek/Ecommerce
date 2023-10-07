import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseURL:string="https://ecommerce.routemisr.com/api/v1/";

  cartItemsNumber:BehaviorSubject<number> = new BehaviorSubject(0);

  cartId:BehaviorSubject<string> = new BehaviorSubject("");


  constructor(private _httpClient:HttpClient) {

this.getCartItems().subscribe({
  next:(response)=>{
    console.log(response);
    this.cartId.next(response.data._id);
    
  }
})


   }


  addToCart(id:string):Observable<any>{
    return this._httpClient.post(`${this.baseURL}cart`,{productId:id},{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }

  getCartItems():Observable<any>{
    return this._httpClient.get(`${this.baseURL}cart`,{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }


  updateItemsCount(id:string,count:number):Observable<any>{
    return this._httpClient.put(`${this.baseURL}cart/${id}`,{count:`${count}`},{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }


  removeItem(id:string):Observable<any>{
    return this._httpClient.delete(`${this.baseURL}cart/${id}`,{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }


  clearCart():Observable<any>{
    return this._httpClient.delete(`${this.baseURL}cart`,{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }

  onlinePayment(cartId:string,address:any):Observable<any>{
    return this._httpClient.post(`${this.baseURL}orders/checkout-session/${cartId}?url=http://localhost:4200`,{address:address},{headers:{token:`${localStorage.getItem("userToken")}`}
  })

  }



}

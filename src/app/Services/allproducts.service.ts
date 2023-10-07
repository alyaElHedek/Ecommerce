import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

baseURL:string="https://ecommerce.routemisr.com/api/v1/"

  constructor(private _httpClient:HttpClient) { 

  }

  getAllProducts():Observable<any>{
return this._httpClient.get(`${this.baseURL}products`)
  }
  getProductById(id:string):Observable<any>{
    return this._httpClient.get(`${this.baseURL}products/${id}`)
      }

  getCategories():Observable<any>{
    return this._httpClient.get(`${this.baseURL}categories`)
  }
  getAllSubCategoriesOnCategory(id:string):Observable<any>{
    return this._httpClient.get(`${this.baseURL}categories/${id}/subcategories`)
      }


  getBrands():Observable<any>{
    return this._httpClient.get(`${this.baseURL}brands`)

  }


}

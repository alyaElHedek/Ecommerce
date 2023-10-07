import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { SigningIndata, SigningUpdata } from './interface/signingdata';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  baseURL:string=`https://ecommerce.routemisr.com/api/v1/`

  userData:BehaviorSubject<any> = new BehaviorSubject("");



  constructor(private _http:HttpClient,private _router:Router) {

if(localStorage.getItem("userToken")){
  this.getUserData();
}

   }


getUserData(){
  let token = JSON.stringify(localStorage.getItem("userToken")) ;
  let decoded = jwtDecode(token);
  this.userData.next (decoded);

}


  register(data:SigningUpdata):Observable<any>{
    return this._http.post(`${this.baseURL}auth/signup`,data)
  }
  login(data:SigningIndata):Observable<any>{
    return this._http.post(`${this.baseURL}auth/signin`,data)
  }
  logout(){
    localStorage.removeItem("userToken");
    this.userData.next(null);
    this._router.navigate(['/login']);
  }







  
}

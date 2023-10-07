import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  baseURL:string=`https://ecommerce.routemisr.com/api/v1/auth/`

  constructor(private _http:HttpClient) { }


  forgotPassword(userEmail:object):Observable<any>{
    return this._http.post(`${this.baseURL}forgotPasswords`,userEmail)
  }

  resetCode(resetCode:object):Observable<any>{
    return this._http.post(`${this.baseURL}verifyResetCode`,resetCode);
  }


  resetPassword(resetPasswordData:object):Observable<any>{
    return this._http.put(`${this.baseURL}resetPassword`,resetPasswordData);
  }

}

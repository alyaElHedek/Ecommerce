import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {


  const routing = inject(Router)

if(localStorage.getItem("userToken") != null){
  return true;

}else{
  routing.navigate(['/login']);
  return false;
}


};

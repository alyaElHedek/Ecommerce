import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { BrandComponent } from './Components/brands/brand.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { authGuard } from './auth.guard';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AllproductsComponent } from './Components/allproducts/allproducts.component';
import { SubCategoriesComponent } from './Components/sub-categories/sub-categories.component';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';

const routes: Routes = [
  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', canActivate:[authGuard]  , component:HomeComponent},
  {path:'products', canActivate:[authGuard]  , component:AllproductsComponent},
  {path:'productdetails/:id', canActivate:[authGuard]  ,  component:ProductDetailsComponent},

  {path:'categories', canActivate:[authGuard]  ,  component:CategoriesComponent},
  {path:'subcategories/:id', canActivate:[authGuard]  ,component:SubCategoriesComponent},

  {path:'brands', canActivate:[authGuard]  , component:BrandComponent},


  {path:'signup',component:SignUpComponent},
  {path:'login',component:SignInComponent},
  {path:'forgotPassword',component:ForgetPasswordComponent},
  
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },

  {path:'checkout',component:CheckoutComponent},
  {path:'allorders',component:AllordersComponent},
  
  { path: 'wishList', loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule) },

  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

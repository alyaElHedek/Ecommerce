import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandComponent } from './Components/brands/brand.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AllproductsComponent } from './Components/allproducts/allproducts.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SubCategoriesComponent } from './Components/sub-categories/sub-categories.component';
import { MainSliderComponent } from './Components/main-slider/main-slider.component';
import { SliderContainerComponent } from './Components/slider-container/slider-container.component';
import { TrimPipe } from './Pipes/trim.pipe';
import { SearchPipe } from './Pipes/search.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './Components/checkout/checkout.component';
import { AllordersComponent } from './Components/allorders/allorders.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoaderInterceptor } from './Interceptors/loader.interceptor';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    CategoriesComponent,
    BrandComponent,
    NotFoundComponent,
    AllproductsComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    SubCategoriesComponent,
    MainSliderComponent,
    SliderContainerComponent,
    TrimPipe,
    SearchPipe,
    CheckoutComponent,
    AllordersComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule ,
    CarouselModule ,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
   },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

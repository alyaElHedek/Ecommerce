import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  isLoading:boolean=false;

  errorMsg:string='';

constructor(private _authService:AuthService,private _router:Router){

}

loginForm:FormGroup = new FormGroup({
email: new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z][A-Za-z0-9]{5,8}$/)]),

},

)

login(form:FormGroup){
  console.log("RegisterForm",form);
  if(form.valid){

    this.isLoading=true;

    this._authService.login(form.value).subscribe({

      next:(response:any) =>{
        console.log(response);
        this.isLoading=false;
        localStorage.setItem("userToken",response.token);
        this._authService.getUserData();
        this._router.navigate(['/home'])

      },
     error:(err:any)=>{
        console.log(err);
        this.errorMsg=err.error.message;

     }

    })

  }
  
}


}

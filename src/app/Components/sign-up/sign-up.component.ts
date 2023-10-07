import { passwordConfirmation } from './../passwordConfirmation';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {


  isLoading:boolean=false;

  errorMsg:string='';

constructor(private _authService:AuthService,private _router:Router){

}

registerForm:FormGroup = new FormGroup({
name: new FormControl('',[Validators.required,Validators.minLength(3)]),
email: new FormControl('',[Validators.required,Validators.email]),
password: new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z][A-Za-z0-9]{5,8}$/)]),
rePassword: new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z][A-Za-z0-9]{5,8}$/)]),
phone: new FormControl('',[Validators.required,Validators.minLength(11),Validators.maxLength(11)])

},
{
  validators:passwordConfirmation
}
)

register(form:FormGroup){

  console.log("RegisterForm",form);

  if(form.valid){
    this.isLoading=true;

    this._authService.register(form.value).subscribe({
        next:(response:any) =>{
        console.log(response);
        this.isLoading=false;
        this._router.navigate(['/login'])
      },
     error:(err:any)=>{
        console.log(err);
        this.errorMsg=err.error.message;

     }

    })

  }
  
}

}

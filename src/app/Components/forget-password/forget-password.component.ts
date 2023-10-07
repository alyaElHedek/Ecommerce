import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ForgotPasswordService } from 'src/core/services/forgot-password.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {


  constructor(private _forgotPasswordService: ForgotPasswordService,private _router:Router) { }

  step1: boolean = true;
  step2: boolean = false;
  step3: boolean = false;

  email: string = '';

  message: string = ''

  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  resetCodeForm: FormGroup = new FormGroup({
    resetCode: new FormControl('', [Validators.required])
  })

  resetPasswordForm: FormGroup = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z][A-Za-z0-9]{5,8}$/)])
  })

  forgotPassword(): void {
    let userEmail = this.forgotPasswordForm.value;
    this.email = userEmail.email;

    this._forgotPasswordService.forgotPassword(userEmail).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.message;
        this.step1 = false;
        this.step2 = true;
      },
      error: (err) => {
        this.message = err.error.message;


      }
    })
  }

  resetCode(): void {
    let resetCode = this.resetCodeForm.value;
    this._forgotPasswordService.resetCode(resetCode).subscribe({
      next: (response) => {
        console.log(response);
        this.message = response.status;

        this.message = response.message;
        this.step2 = false;
        this.step3 = true;
      },
      error: (err) => {
        this.message = err.error.message;

      }
    })
  }

  resetPassword(): void {

    let resetPasswordData = this.resetPasswordForm.value;
    resetPasswordData.email = this.email;


    this._forgotPasswordService.resetPassword(resetPasswordData).subscribe({
      next: (response) => {
        console.log(response);
        if (response.token) {
          localStorage.setItem("token", response.token);
          this._router.navigate(['/home'])
        }

      },
      error: (err) => {
        this.message = err.error.message;

      }

    })
  }

}

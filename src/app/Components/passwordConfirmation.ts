import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const passwordConfirmation : ValidatorFn = (control: AbstractControl):ValidationErrors|null =>{

    let password = control.get('password');
    let confirmPassword = control.get('rePassword');
    if(password && confirmPassword && password?.value != confirmPassword?.value){
return {
    passwordConfirmationerror : true
}
    }

    return null;
}
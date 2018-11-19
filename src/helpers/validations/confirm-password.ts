import {AbstractControl} from "@angular/forms";

export class ConfirmPassword {

    static confirmPassword(control: AbstractControl) {
        if (control.get("password").value && control.get("confirmPassword").value) {
            let senha = control.get("password").value;
            let confirmPassword = control.get("confirmPassword").value;

            if (senha !== confirmPassword) {
                control.get("confirmPassword").setErrors({ valid: true })
            }
        }
    }

}

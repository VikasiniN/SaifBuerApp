import { AbstractControl, FormGroup  } from '@angular/forms';

export function numberValue(control: AbstractControl) {
    if (control && ( control.value !== null || control.value !== undefined)) {
        const NUMBER = /^[0-9]/;
        if (!NUMBER.test(control.value)) {
            return {
                isError: true
            };
    }
        return null;
}
}

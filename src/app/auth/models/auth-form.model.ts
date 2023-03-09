import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class AuthFormModel {
  static getForm(fb: FormBuilder): FormGroup {
    return fb.group({
      login: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
}

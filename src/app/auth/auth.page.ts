import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { AuthFormModel } from './models/auth-form.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  private authService = inject(AuthService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  protected form!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = AuthFormModel.getForm(this.fb);
    this.form.valueChanges.subscribe((res) => console.log(res));
  }

  protected onLogin(): void {
    this.authService.login();
    this.router.navigateByUrl('/home');
  }
}

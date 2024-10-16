import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  userData: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.userData = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }


  onLogin() {
    if(this.userData.valid) {
      console.log('You tried to sign in with: ', this.userData.value)
    } else {
      console.log('invalid entry')
    }
  }
}

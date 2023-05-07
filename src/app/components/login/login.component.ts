import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from '../model/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  public user: User = new User();
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router) {

    this.loginForm = this.formBuilder.group({

      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })


  }

  onFormSubmit() {
    this.user = this.loginForm.value;
    console.log(this.loginForm.value)
    this.userService.login(this.user).subscribe(response => {
      console.log(response);
    });
    alert("LoggedIn successfully..." + this.loginForm.value);
    console.log(this.loginForm.value)
  }
}

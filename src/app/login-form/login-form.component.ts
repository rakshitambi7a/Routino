import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
 selector: 'app-login-form',
 standalone:true,
 imports:[ReactiveFormsModule],
 templateUrl: './login-form.component.html',
 styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
 loginForm: FormGroup = new FormGroup({
  username: new FormControl(""),
  password: new FormControl(""),
 });
 isLoggedIn = false;

 constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

 ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
 }

 onSubmit(): void {
    if (this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      const password = this.loginForm.get('password')?.value;
      this.authService.login(username, password).subscribe(
        data => {
          console.log(data);
          this.isLoggedIn = true;
        },
        error => console.error(error)
      );
    }
 }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  rForm:FormGroup;
  password:string='';
  email:string='';
  titleAlert:string = 'Verifique el campo requerido';
  
  
  constructor(private fb:FormBuilder,
    private authService: AuthService){
  
    this.rForm = fb.group({
      'email' : ['', Validators.required],
      'password' : ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(500)])],
/*       'validate' : '' */
    });
  
  
  }
  
  
  addPost(post) {
    const login = {
      email: post.email,
      password: post.password
    }
    this.authService.login(login).subscribe(response => {
      console.log(response);
    })
  }
  
}
  
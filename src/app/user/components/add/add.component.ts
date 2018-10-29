import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

formAdd: FormGroup;
titleAlert:string = 'Verifique el campo requerido';

  constructor(private fb:FormBuilder,
    private userService:UserService) {

      this.formAdd = fb.group({
        'firstName' : ['', Validators.required],
        'lastName' : ['', Validators.required],
        'email' : ['', Validators.required],
        'password' : ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(500)])],
        'role' : ['', Validators.required]
     })
  }

  addPost(post){
    // var user = new User(post.firstName, post.lastName,post.email,post.password,post.password)
    if(this.formAdd.valid){
      const user :User ={
        firstName: post.firstName, 
        lastName: post.lastName, 
        email: post.email,
        role: post.role,
        password: post.password,
      }
        this.userService.addUser(user).subscribe(
          response => {
          console.log(response);
      },
      error=> {
        console.log(error);
      })
    }
  }
}
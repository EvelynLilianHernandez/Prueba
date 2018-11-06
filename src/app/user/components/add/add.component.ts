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
  titleAlert = 'Verifique el campo requerido';

  constructor(private fb: FormBuilder,
    private userService: UserService) {
  }

  addPost(user) {
    // var user = new User(post.firstName, post.lastName,post.email,post.password,post.password)

    this.userService.addUser(user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}

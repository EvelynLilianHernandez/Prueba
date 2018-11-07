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

  constructor(private fb: FormBuilder,
    private userService: UserService) {
  }

  post(user) {

    this.userService.addUser(user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}

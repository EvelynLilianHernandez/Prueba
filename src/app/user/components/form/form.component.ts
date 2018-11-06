import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() currentUser;
  @Output() sendData = new EventEmitter();

  formUser: FormGroup;
  titleAlert = 'Verifique el campo requerido';

  constructor(private fb: FormBuilder,
    private userService: UserService) {

    this.formUser = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(500)])],
      'role': ['', Validators.required]
    });
  }

  onSubmit(post) {
    // var user = new User(post.firstName, post.lastName,post.email,post.password,post.password)
    if (this.formUser.valid) {
      const user: User = {
        firstName: post.firstName,
        lastName: post.lastName,
        email: post.email,
        role: post.role,
        password: post.password,
      };
      this.sendData.emit(user);
    }
  }
}

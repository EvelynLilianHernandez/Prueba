import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {

  idUser: string;
  user: User;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute) {
    this.idUser = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.userService.getOne(this.idUser).subscribe(response => {
      this.user = new User(response['data'].user);
      // this.formUser.patchValue(this.user);
    });
  }

  post(user) {   // se recibe el user mediante el (sendData)

    this.userService.editUser(this.idUser, user).subscribe(response => {
      console.log(response);
    });
  }
}

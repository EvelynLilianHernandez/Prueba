import { Component, OnInit } from '@angular/core';
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

  formEdit: FormGroup;
  titleAlert = 'Verifique el campo requerido';
  idUser: string;
  user: User;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute) {

    this.formEdit = fb.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(500)])],
      'role': ['', Validators.required]
    });

    this.idUser = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.userService.getOne(this.idUser).subscribe(response => {
      console.log(response);
      this.user = new User(response['data'].user);
      this.formEdit.patchValue(this.user);
    });
  }

  addPost() {
    const formValue = this.formEdit.value;
    console.log(formValue);
    this.userService.editUser(this.idUser, formValue).subscribe(response => {
      console.log(response);
    });
    /* this.route.params.subscribe(params => {

      params['u'].firstName=post.firstName;
      params['u'].lastName=post.lastName;
      params['u'].email=post.email;
      params['u'].password=post.password;
      params['u'].role=post.role;



    }); */



    /*  if(this.formEdit.valid){
       console.log('Usuario modificado');
     } */

  }
}

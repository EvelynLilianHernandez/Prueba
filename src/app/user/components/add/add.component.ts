import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {

formAdd: FormGroup;
nombre:string='';
apellido:string='';
dni:string='';
email:string='';
password:string='';

titleAlert:string = 'Verifique el campo requerido';

  constructor(private fb:FormBuilder,
    private userService:UserService) {

      this.formAdd = fb.group({
        'email' : ['', Validators.required],
        'password' : ['', Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(500)])],
      
     }


  addPost(post){
    const user: User = {
      nombre=post.
    }
  }
}
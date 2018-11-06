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
    this.idUser = this.route.snapshot.paramMap.get('id');   // paramMap toma el parámetro de ruta, snapshot puede usarse o no pero en el caso de hacerlo hay que tener cuidado al reutilizar componentes
  }

  ngOnInit() {
    this.userService.getOne(this.idUser).subscribe(response => {
      this.user = new User(response['data'].user);
      this.formEdit.patchValue(this.user);   // setValue asigna el valor en TODOS los controles del formulario, patchValue solo algunos
    });
  }

  addPost(user) {
    const formValue = this.formEdit.value;
    this.userService.editUser(this.idUser, formValue).subscribe(response => {
      console.log(response);
    });
  }
}

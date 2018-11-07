import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import { formValue } from 'selenium-webdriver/http';

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

  ngOnChanges() { // se llama cuando cambia alguna propiedad de este formulario
    if (this.currentUser) {   // si el formulario tiene algo
      this.formUser.patchValue(this.currentUser);   // machea el formulario con los datos del usuario (currentUser pasa a tener los datos del usuario porque se pasa mediante [currentUser]="user" en el edit.html)
    }
  }

  onSubmit() {  // cuando se envia el formulario se cargan los valores con los datos del html (formValue), y se emite el user mediante (sendData) y se vincula con el "formValue($event)" pasandole el user en el edit.html
    const formValue = this.formUser.value;
    if (this.formUser.valid) {
      const user: User = {
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        email: formValue.email,
        role: formValue.role,
        password: formValue.password,
      };
      this.sendData.emit(user);
    }
  }
}

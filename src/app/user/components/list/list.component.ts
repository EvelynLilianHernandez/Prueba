import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor( private userService: UserService) { }

  ngOnInit() {   //dentro del ngOnInit se obtiene datos por medio de un servicio para utilizarlos dentro del componente
    this.getAllUsers();
  }

  public users:User[];

  getAllUsers(){

    this.userService.getAll()
    .subscribe(response => {
      console.log(response)
    })
  }
//OBSERVABLE???? comunica con el servidor? como lo uso?


}

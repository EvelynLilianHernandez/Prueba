import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public users:User[] = [];
  constructor( private userService: UserService) { }

  ngOnInit() {   //dentro del ngOnInit se obtiene datos por medio de un servicio para utilizarlos dentro del componente
    this.getAllUsers();
  
  }
  
  getAllUsers(){

    this.userService.getAll()
      .subscribe(response => {
        this.users = response['data'].users;
    })
  }


  onEdit(index:number){

    
    
  }

  onDelete(index:number)
  {

  }
}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public users:User[] = [];
  constructor( private userService: UserService,
    private router:Router)
    { }

  ngOnInit() {   //dentro del ngOnInit se obtiene datos por medio de un servicio para utilizarlos dentro del componente
    this.getAllUsers();
  
  }
  
  getAllUsers(){

    this.userService.getAll()
      .subscribe(response => {
        this.users = response['data'].users;
        console.log(this.users);
        
    })
  }


  onEdit(index:number){

    
    this.router.navigate(['/user/edit', index]);
  
  }

  onDelete(index:number)
  {

  }
}

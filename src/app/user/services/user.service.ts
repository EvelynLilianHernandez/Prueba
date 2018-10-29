import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//TODO ESTO NO SE SI ESTA BIEN 

@Injectable({
  providedIn: 'root'
})
export class UserService {
  base: string;
  
  constructor(private http: HttpClient) { 
    this.base = environment.api.apiUrl + environment.api.user.base;
  }


  addUser(params){
    return this.http.post(this.base, params);
  }

  getAll(){
    const url = this.base; 
    return this.http.get(url);
  }

  getOne(id){
    const url = this.base + '/' + id; 
    return this.http.get(url);
  }
}








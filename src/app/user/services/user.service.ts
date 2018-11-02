import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  base: string;
  token: string;
  header: any;

  constructor(private http: HttpClient) {
    this.base = environment.api.apiUrl + environment.api.user.base;
    this.token = localStorage.getItem('token');
    this.header = new HttpHeaders({ 'Content-Type': 'application/json', 'X-API-Key': this.token });
  }


  addUser(params) {
    return this.http.post(this.base, params);
  }

  getAll() {
    const url = this.base;
    return this.http.get(url, { headers: this.header });
  }

  editUser(id, entity) {
    const url = `${this.base}`;
    entity.id = id;
    return this.http.put(url, entity, { headers: this.header });
  }

  getOne(id) {
    const url = this.base + '/' + id;
    return this.http.get(url, { headers: this.header });
  }

  getUserByEmail(email) {
    const url = this.base + '/' + email;
    return this.http.get(url, { headers: this.header });
  }

  getUserById(id) {
    const url = this.base + '/' + id;
    return this.http.get(url, { headers: this.header });
  }

  deleteUser(id) {
    const url = this.base + '/' + id;
    return this.http.delete(url, { headers: this.header });
  }
}








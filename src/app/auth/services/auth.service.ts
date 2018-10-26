import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base: string;

  constructor(private http: HttpClient) { 
    this.base = environment.api.apiUrl + '/' + environment.api.auth.base;
  }

  login(params){
    const url = this.base+ '/' + environment.api.auth.login; 
    return this.http.post(url, params);
  }
}



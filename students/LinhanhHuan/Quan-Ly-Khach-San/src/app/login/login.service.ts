import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable()
export class LoginService {

  constructor(private aipService: ApiService) { 
    
  }
  login(username: string, password: string) {
    return new Promise((resolve, reject) => {
      this.aipService.post('/api/login', {
        username: username,
        password: password
      }).then(res => {
        this.aipService.token = res.json();
        resolve(res.json());
      }).catch(err => {
        console.error(err);
        reject(err);
      });
    });
  }
}

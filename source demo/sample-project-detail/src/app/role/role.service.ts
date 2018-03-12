import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class RoleService {

  constructor(private apiService: ApiService) { }

  getRole(id) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`/api/getRole/${id}`).then(res => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      })
    })
  }

  getRoles() {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/getRoles/', {}).then(res => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      })
    });
  }

  saveRole(role) {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/saveRole/', role).then(res => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      })
    })
  }
}
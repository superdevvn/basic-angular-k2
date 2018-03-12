import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class UserListService {
  constructor(private apiService: ApiService) { }
  getList() {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/getList', {}).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }

}

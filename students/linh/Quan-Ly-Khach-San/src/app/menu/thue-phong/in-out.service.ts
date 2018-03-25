import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class InOutService {

  constructor(private apiService: ApiService) { }
  getInOuts() {
    return new Promise((resolve, reject) => {
      this.apiService.post('/api/getInOuts', {}).then(res => {
        resolve(res.json());
        console.log(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }

  deleteInOut(id) {
    return new Promise((resolve, reject) => {
      this.apiService.delete(`api/deleteInOut?id=${id}`).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      });
    });
  }
}

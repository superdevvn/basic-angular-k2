import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class InoutDetailServiceService {

  constructor(private apiService: ApiService) { }
  getInOut(id) {
    return new Promise((resolve, reject) => {
      this.apiService.get(`api/getInOut/${id}`).then((res) => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }
  saveInOut(inout) {
    return new Promise((resolve, reject) => {
      this.apiService.post('api/saveInOut/', inout).then((res) => {
        resolve(res.json());
      }).catch(err => {
        reject(err);
      });
    });
  }
}

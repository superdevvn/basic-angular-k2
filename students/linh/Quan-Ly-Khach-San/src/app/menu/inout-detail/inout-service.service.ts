import { Injectable } from '@angular/core';
import { ApiService } from '../../api.service';

@Injectable()
export class InoutServiceService {

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

}

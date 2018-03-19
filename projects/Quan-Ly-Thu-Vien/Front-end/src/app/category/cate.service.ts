import { Injectable } from '@angular/core';
import { ApiService } from '../services/api.service';

@Injectable()
export class CateService {

  constructor(private apiService:ApiService) { }



getCates(){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/getCategories/',{}).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

getCate(id){
  return new Promise((resolve,reject)=>{
    this.apiService.get(`/api/getCategory/${id}`).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

saveCate(role){
  return new Promise((resolve,reject)=>{
    this.apiService.post('/api/saveCategory/',role).then(res=>{
      console.log(res.json());
      resolve(res.json());

    }).catch(err=>{
      console.error(err);
      reject(err);
    })
  })
}

deleteRole(id) {
  return new Promise((resolve, reject) => {
    this.apiService.delete(`api/deleteRole?id=${id}`).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err);
    });
  });
}

}
import { Injectable } from '@angular/core';
import { Manufacturer } from './../shared/manufacturer.model';
import { ApiService } from './../../../api.service';


@Injectable()
export class ManufacturerService {
    constructor(private apiService: ApiService) {

    }

    saveManufacturer(manufacturer: Manufacturer) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveManufacturer', manufacturer).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }


    getList() { //qui tắt đặt tên
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getManufacturers',{}).then(res=>{
                resolve(res.json());
            }).catch(err=>{
                reject(err);
            })
        })
    }


    getManufacturers(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getManufacturer/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            });
        });
    }



}



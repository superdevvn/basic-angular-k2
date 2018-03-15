import { ApiService } from './../../../api.service';
import { Injectable } from '@angular/core';
import { Unit } from './../shared/unit.model';

@Injectable()
export class UnitService {

    constructor(private apiService: ApiService) {

    }

    saveUnit(unit: Unit) {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/saveUnit', unit).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

    getList() {
        return new Promise((resolve, reject) => {
            this.apiService.post('api/getUnits', {}).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }

    getUnit(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`api/getUnit/${id}`).then(res => {
                resolve(res.json());
            }).catch(err => {
                reject(err);
            })
        })
    }


}

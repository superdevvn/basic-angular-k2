import { Injectable } from "@angular/core";
import { ApiService } from "../../api.service";


declare var $:any;



@Injectable()
export class ManufacturerService {
    constructor(private apiService: ApiService) { }
    getManufacturers() {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/getManufacturers/`, {}).then(res => {
           
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }

}
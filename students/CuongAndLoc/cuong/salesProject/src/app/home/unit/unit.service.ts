import { Injectable } from "@angular/core";
import { ApiService } from "../../api.service";


declare var $:any;



@Injectable()
export class UnitService {
    constructor(private apiService: ApiService) { }
    getUnits() {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/getUnits/`, {}).then(res => {
               
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }

}
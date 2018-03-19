import { Injectable } from "@angular/core";
import { ApiService } from "../../api.service";


declare var $:any;



@Injectable()
export class CategoryService {
    constructor(private apiService: ApiService) { }
    getCategorys() {
        return new Promise((resolve, reject) => {
            this.apiService.post(`/api/getCategories/`, {}).then(res => {
               
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }
    getCategory(id) {
        return new Promise((resolve, reject) => {
            this.apiService.get(`/api/getCategory/${id}`).then(res => {         
                resolve(res.json());
            }).catch(err => {
                console.log(err);
                reject(err);
            });
        });
    }

}
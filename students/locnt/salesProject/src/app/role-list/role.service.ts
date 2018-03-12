import{Injectable} from "@angular/core";
import { ApiService } from "../api.service";



@Injectable()
export class RoleService{
    /**
     *
     */
    constructor(private apiservice:ApiService) {
      
        
    }
    getCustomer(){
        return new Promise((resolve,reject)=>{
            this.apiservice.post('/api/getCustomers/',{}).then((res)=>{
                console.log(res.json());
                resolve(res.json());
            }).catch(err => {
                console.error(err);
                reject(err);
                
            });
        });
    }
}
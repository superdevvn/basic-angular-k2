import { User } from "./../interfaces/user";

export class Person implements User {
    username: string;
    password: string;
    firstName: string;
    lastName: string;

    print(){
        alert(`Person: ${this.firstName} ${this.lastName}`);
    }
}
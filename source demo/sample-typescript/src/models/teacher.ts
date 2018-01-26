import { Person } from "./person";
export class Teacher extends Person {
    salary: number;
    constructor(salary:number) {
        super();
        this.salary = salary;
    }

    print(){
        alert(`Teacher: ${this.firstName} ${this.lastName}, salary: ${this.salary}`);
    }
}
import { Person } from "./person";
export class Student extends Person {
    code: string;
    constructor(firstName: string, lastName: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
    }

    print() {
        alert(`Student: ${this.firstName} ${this.lastName}, MSSV: ${this.code}`);
    }
}
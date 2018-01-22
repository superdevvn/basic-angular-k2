import {Person} from "./src/models/person"
import {Student} from "./src/models/student"
import {Teacher} from "./src/models/teacher"

function init(){
    let person = new Person();
    person.firstName = "Thong";
    person.lastName = "Van";
    person.print();

    let student = new Student("Nghia","Tran");
    student.code = "SE62702";
    student.print();

    let teacher = new Teacher(1000000);
    teacher.firstName = "Peter";
    teacher.lastName = "Dark";
    teacher.print();
}

init();
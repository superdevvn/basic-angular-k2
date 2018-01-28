import { Component, OnInit } from '@angular/core';
class Student {
  name: string;
  age: number;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  firstname: string;
  lastname: string;
  Arr = ['Linh', 'Huan', 'An', 'Thong'];
  students: Student[]=[];
  constructor() { }

  ngOnInit() {
    this.firstname = "Nguyen Ngoc";
    this.lastname = "Linh";

    let student = new Student();
    student.name = "Nguyen Ngoc A";
    student.age = 21;
    this.students.push(student);

    student = new Student();
    student.name = "Nguyen Van B";
    student.age = 30;
    this.students.push(student);

    student = new Student();
    student.name = "Nguyen Thi C";
    student.age = 28;
    this.students.push(student);
  }
  click() {
    alert(`${this.firstname} ${this.lastname}`)
  }
}

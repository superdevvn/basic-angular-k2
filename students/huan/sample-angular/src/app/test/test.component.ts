import { Component, OnInit } from '@angular/core';

class Student{
  name:string;
  age:number;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  firstName:string;
  lastName:string;
  students: Student[]=[];
  heroes = ['Huan', 'Linh','Thong','Sang'];
  constructor() { }

  ngOnInit() {
    this.firstName = "Tran Dinh";
    this.lastName = "Huan";

    let student = new Student();
    student.name = "Huan";
    student.age = 20;
    this.students.push(student);

    student = new Student();
    student.name = "Linh";
    student.age = 20;
    this.students.push(student);

    student = new Student();
    student.name = "Tien";
    student.age = 20;
    this.students.push(student);
  }
click(){
  alert(`${this.firstName} ${this.lastName}`)
}
}

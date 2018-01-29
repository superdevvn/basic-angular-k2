import { Component, OnInit } from '@angular/core';
class Student{
  name:string;
  age:string;
}
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  firstName:string;
  lastName:string;
  students: Student[] = []
  heroes= ['Linh','Thong','Quang' ];
  constructor() { }

  ngOnInit() {
    this.firstName ="Le Sy";
    this.lastName ="Quang";
    let student =new Student();
    student.name= "Quang";
    student.age="22";
    this.students.push(student);

    let student =new Student();
    student.name= "Linh";
    student.age="25";
    this.students.push(student);

    let student =new Student();
    student.name= "Thong";
    student.age="24";
    this.students.push(student);
  }
 click() {
   alert(`${this.firstName} ${this.lastName}`);
 }
}

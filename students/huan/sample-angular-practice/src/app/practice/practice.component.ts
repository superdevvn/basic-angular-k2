import { Component, OnInit } from '@angular/core';

class Student{
  name:string;
  age:number;
}
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  firstName:string;
  lastName:string;
  students: Student[]=[];
  heroes = ['Huan', 'Linh','Thong','Sang'];

  constructor() { }

  ngOnInit() {
    let student = new Student();
    student.name = "Huan";
    student.age = 20;
    this.students.push(student);

    student = new Student();
    student.name = "Linh";
    student.age = 21;
    this.students.push(student);

    student = new Student();
    student.name = "Tien";
    student.age = 22;
    this.students.push(student);
  }
  Click(){
    alert(`${this.firstName} ${this.lastName}`)
  }
}

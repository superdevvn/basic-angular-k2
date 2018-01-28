import { Component, OnInit } from '@angular/core';

class Student{
  age: number;
  name: string;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
firstName: string;
lastName: string;
heroes =['Sang','Huan','Thong','Linh'];
students: Student[]=[];
  constructor() { }

  ngOnInit() {
    this.firstName = "Sang";
    this.lastName = "Nguyen";
    
    let student = new Student;
    student.age = 21;
    student.name = "Sang";
    this.students.push(student);

    let student2 = new Student;
    student2.age = 22;
    student2.name = "Nguyen";
    this.students.push(student2);

    let student3 = new Student;
    student3.age = 23;
    student3.name = "Nam";
    this.students.push(student3);
  }

  click(){
    alert(`${this.firstName} ${this.lastName}`)
  }
}

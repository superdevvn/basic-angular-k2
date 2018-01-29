import { Component, OnInit } from '@angular/core';

class Student {
  name:string;
  age:number;
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  firstName: string;
  lastName: string;
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  students: Student[] = [];
  constructor() { }


  ngOnInit() {
    this.firstName = "Nguyen Ngoc";
    this.lastName = "ABC";

    let student = new Student();
    student.name = "Linh";
    student.age = 19;
    this.students.push(student);

    student = new Student();
    student.name = "Diem";
    student.age = 20;
    this.students.push(student);

    student = new Student();
    student.name = "Kinh";
    student.age = 19;
    this.students.push(student);

    student = new Student();
    student.name = "Ho";
    student.age = 19;
    this.students.push(student);
  }

  click() {
    alert(`${this.lastName} ${this.firstName}`);
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }
}

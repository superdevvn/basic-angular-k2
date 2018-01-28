import { Component, OnInit } from '@angular/core';
class Teacher {
  Name: string;
  Age: number;
  Salary: number;
}
@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  ArrList = ['Nguyen', 'Ngoc', 'Linh', 'Dep', 'Trai'];
  ArrTeachers: Teacher[] = [];
  constructor() { }

  ngOnInit() {
    this.firstName = "Nguyen Ngoc";
    this.lastName = "Linh";
    this.age = 21;
    this.fullName = this.firstName + " " + this.lastName;

    let teacher = new Teacher();
    teacher.Name = "Nguyen Van A";
    teacher.Age = 34;
    teacher.Salary = 2000;
    this.ArrTeachers.push(teacher);


    teacher = new Teacher();
    teacher.Name = "Nguyen Thi B";
    teacher.Age = 40;
    teacher.Salary = 1500;
    this.ArrTeachers.push(teacher);
    

    teacher = new Teacher();
    teacher.Name = "Nguyen Ngoc C";
    teacher.Age = 53;
    teacher.Salary = 3000;
    this.ArrTeachers.push(teacher);
    
  }
  click(){
    alert(`${this.firstName} ${this.lastName}`)
  }
  // val="";
  // keyup(value:string){
  //   this.val=value;
  // }

}

import { Component, OnInit } from '@angular/core';

class Student{
  firstName: string;
  lastName: string;
  age: number;
}

@Component({
  selector: 'page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})


export class Page1Component implements OnInit{
students: Student[]=[];
firstName: string;
lastName: string;
constructor(){}
  ngOnInit(){
    this.firstName="Sang";
    this.lastName ="Nguyen";

    let student1 = new Student;
    student1.firstName = "Sang";
    student1.lastName = "Nguyen";
    student1.age = 21;

    let student2 = new Student;
    student2.firstName = "Huy";
    student2.lastName = "Tran";
    student2.age = 22;

    let student3 = new Student;
    student3.firstName = "Nam";
    student3.lastName = "Le";
    student3.age = 23;

    let student4 = new Student;
    student4.firstName = "Tuan";
    student4.lastName = "Mai";
    student4.age = 24;

  
      
    
  }
  click(){
    alert(`${this.firstName} ${this.lastName}`)
  }


}

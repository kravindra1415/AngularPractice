import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent implements OnInit {

  constructor() { }

  myProperty = true

  giveMargin = "20px"

  isActive = true

  mltClasses = {
    class1: true,
    class2: true,
    class3: false
  }
 
  mltStyle = {
    'background-color': 'red',
    'border': '10px solid green'
  }

  ngOnInit(): void {
  }

}

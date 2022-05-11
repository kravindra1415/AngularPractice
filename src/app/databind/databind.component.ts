import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  name: string = 'ravi';
  enable=false;

  myMethod(a:number,b:number){
    return a+b;
  }

  constructor() { }

  ngOnInit(): void {
  }

}

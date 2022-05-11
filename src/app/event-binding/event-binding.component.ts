import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  msg = ''; 
  onAddCart(event: any) {
    
    this.msg = event.target.value + " added to cart";
  }

  onInputClick(event: any) {
    console.log(event.target.value)
  }

  getInputInfo(inputInfo:any){
    console.log(inputInfo.value)
  }

  ngOnInit(): void {
  }

}

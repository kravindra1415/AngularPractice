import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  @Input()
  data!: string;


  sendMsg: string = 'From output decorator'
  @Output()
  event: EventEmitter<string> = new EventEmitter<string>();



  constructor(private myService: ServiceService) { }

  myServiceMsg: string = 'hey!! am from child..'

  ngOnInit(): void {
    this.myService.setMessage(this.myServiceMsg)
  }





  sendTheMsg() {
    this.event.emit(this.sendMsg)
  }

}

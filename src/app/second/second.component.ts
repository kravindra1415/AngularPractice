import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  message: string = 'Angular';





  constructor(private myService: ServiceService) { }
  msgServiceStore!: string;
  ngOnInit(): void {
    this.msgServiceStore = this.myService.getMessage();
  }



  recieveMsg: string = '';

  revieveTheMsg($event: any) {
    this.recieveMsg = $event;
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  msgService!: string;
  constructor() { }

  setMessage(data: string) {
    this.msgService = data;
  }

  getMessage() {
    return this.msgService;
  }
}

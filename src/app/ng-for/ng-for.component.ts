import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  public users = Array();

  onCreateUser(data: any) {
    this.users.push({
      name: data.value
    });
    data.value = "";
  }

  onRemoveUser() {
    this.users.splice(this.users.length - 1)
  }

  onRemoveItem(i: any) {
    this.users.splice(i, 1)
  }

  ngOnInit(): void {
  }

  products = [
    {
      proImg: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', name: 'laptop', id: 'pro01', price: 15000
    },
    {
      proImg: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60', name: 'mobile', id: 'pro02', price: 10000
    }, {
      proImg: 'https://images.unsplash.com/photo-1528928441742-b4ccac1bb04c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60', name: 'tv', id: 'pro03', price: 12000
    }, {
      proImg: 'https://media.istockphoto.com/photos/laundry-room-with-a-washing-machine-picture-id1134696908?b=1&k=20&m=1134696908&s=170667a&w=0&h=ckGWVYSMY7FrOhkthYibyl1ktP9RkCZ-zR9sxH5GQ18=', name: 'wm', id: 'pro04', price: 5000
    }
  ]

}

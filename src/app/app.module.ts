import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ServiceService } from './service/service.service';
import { MyComponentComponent } from './my-component/my-component.component';
import { TopnavComponent } from './my-component/topnav/topnav.component';
import { HeaderComponent } from './my-component/header/header.component';
import { TxtSec1Component } from './my-component/txt-sec1/txt-sec1.component';
import { TxtSec2Component } from './my-component/txt-sec2/txt-sec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayComponent } from './two-way/two-way.component';
import { FormsModule } from '@angular/forms';

//ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MyComponentComponent,
    TopnavComponent,
    HeaderComponent,
    TxtSec1Component,
    TxtSec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventBindingComponent,
    TwoWayComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgForComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

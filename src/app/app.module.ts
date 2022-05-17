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
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'product', component: ProductComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

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
    AboutComponent,
    HomeComponent,
    ProductComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpService } from './emp.service';
import { RouterModule } from '@angular/router';
import {NgModel,NgForm,FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:"employee",component:EmployeeComponent}
    ])
  ],
  providers: [
    EmpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

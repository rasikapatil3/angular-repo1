import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service:EmpService) { }
  employee:any;
  ngOnInit()
  {
    let observableResult = this.service.getEmployees();
    observableResult.subscribe((result)=>{
      this.employee=result;
    })
  }

}

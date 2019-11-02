import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
@Component({
  selector : 'Employee',
  template : `<h2>{{title}}</h2>
  <ul>
    <li *ngFor = "let Employee of Employees">
      {{Employee}}
    </li>
  </ul>
  `
})
export class EmployeeComponent{
  title = "List of Employees"; 
  Employees;
  constructor(service :EmployeeService){
    this.Employees = service.getEmployees();

  }
} 
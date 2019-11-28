import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  url="http://localhost:9999/employee"
  constructor(private http:HttpClient) { }

  getEmployees()
  {
    return this.http.get(this.url);
  }
}

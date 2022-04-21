import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private baseURL = `http://localhost:5000/api/v1`

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseURL}/student`)
  }

  deleteStudent(studentId: string){
    return this.http.delete(`${this.baseURL}/student/${studentId}`)
  }

  addStudent(data: any){
    return this.http.post(`${this.baseURL}/student`,data)
  }

  getSingleStudent(id: string){
    return this.http.get(`${this.baseURL}/student/${id}`)
  }

  updateStudent(id: string,body){
    return this.http.put(`${this.baseURL}/student/${id}`,body)
  }
}

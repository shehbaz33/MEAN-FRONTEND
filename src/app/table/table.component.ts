import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StudentService } from '../student.service';

export interface StudentModel {
  name: string;
  email: number;
  gender: number;
  mobile: string;
  _id: string
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  ELEMENT_DATA: StudentModel[] = []

  constructor(private studentService: StudentService){}

  displayedColumns: string[] = ['_id', 'name', 'email', 'gender', 'mobile','action'];
  dataSource = new MatTableDataSource<StudentModel>(this.ELEMENT_DATA);

  ngOnInit(): void {
    this.studentService.getAllData().subscribe(result => {
      this.dataSource.data = result as StudentModel[]
    })
  }

  edit(e: any){
    console.log(e)
  }

  delete(e: string){
    this.studentService.deleteStudent(e).subscribe(result => {
      if(result){
        this.dataSource.data = this.dataSource.data.filter(item => item._id != e);
      }
    })
    }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private fb: FormBuilder, private studentService: StudentService,private router: Router) { }

  ngOnInit(): void {
    this.studentForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.email],
      gender: ['',Validators.required],
      mobile:['',Validators.required]
    })
  }

  onSubmit(form: FormGroup){
    let data = {
      name: form.value.name,
      email:form.value.email,
      gender: form.value.gender,
      mobile: form.value.mobile
    }
    this.studentService.addStudent(data).subscribe(result => {
      if(result){
        this.router.navigate(['/'])
      }
    })
  }

}

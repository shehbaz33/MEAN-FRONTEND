import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup;
  id:string;

  constructor(private fb: FormBuilder, private studentService: StudentService,private router: Router,private route: ActivatedRoute) {
    this.studentForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.email],
      gender: ['',Validators.required],
      mobile:['',Validators.required]
    })
   }

 

  ngOnInit(): void {
   this.route.params.subscribe(params => {
    if(params['id']){
      this.studentService.getSingleStudent(params['id']).subscribe(result => {
        const fetchedStudent = result['student']
        const {_id,__v, ...updatedObject} = fetchedStudent;
        this.studentForm.setValue(updatedObject)
      })
    }
   })
  }

  onSubmit(form: FormGroup){
    this.route.params.subscribe(params => {
      if(params['id']){
        this.studentService.updateStudent(params['id'],form.value).subscribe(result => {
          if(result){
            this.router.navigate(['/'])
          }
        })
      }
    })
  }
}

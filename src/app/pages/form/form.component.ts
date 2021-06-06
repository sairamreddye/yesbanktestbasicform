import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../providers/data.service';
import { validators } from '../../providers/validators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  submitted = false;
  studentGroup = [
    { status: 'Not Selected', id: 1 },
    { status: 'Selected', id: 2 }
  ];

  status = [
    { status: 'Active', id: 1 },
    { status: 'InActive', id: 2 }
  ];

  studentForm = this.fb.group({
    Email: ["", [Validators.required, Validators.pattern(validators.emailregex)]],
    studentGroup: [this.studentGroup[0].status, [Validators.required]],
    Name: ["", [Validators.required]],
    Password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
    Address: ["", [Validators.required, Validators.maxLength(120)]],
    Phone: ["", [Validators.required, Validators.minLength(10), Validators.pattern(validators.numberRegex)]],
    guardianPhone: ["", [Validators.required, Validators.maxLength(10), Validators.pattern(validators.numberRegex)]],
    enrolmentNumber: ["", [Validators.required]],
    status: [this.status[0].status, [Validators.required]],
    uploadPhoto: ["", [Validators.required]]
  });
  text: string;

  constructor(private fb: FormBuilder, private data: DataService, private route: Router) { }

  get getControls() {
    return this.studentForm.controls;
  }

  ngOnInit(): void {
    console.log(this.studentForm);

  }

  onSubmit() {
    this.submitted = true;
    if (!this.studentForm.valid) {
      return false;
    }
    else {
      this.editedStudent();
      this.route.navigateByUrl('/show')
    }
  }

  editedStudent() {
    this.data.studentDetails(this.studentForm.value);
  }

  openImage(event: any) {
    if (!event.target.files[0].type.includes('image')) {
      return this.studentForm.get('uploadPhoto').setErrors({ 'notValidformat': true });
    }
    else {
      let data: any = { file: event.target.files[0] };
      var reader = new FileReader();
      reader.readAsDataURL(data.file);
      reader.onload = (_event) => {
     this.studentForm.value.uploadPhoto = data.fileUrl = reader.result;
      }
    }
  }

  allowPasswordPatternOnly(x){
    this.text += x.target.value;
    console.log("text:"+this.text)
  }

}

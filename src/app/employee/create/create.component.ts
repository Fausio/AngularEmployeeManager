import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department/Department.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from 'src/app/models/employee/employee.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  employee: Employee = {
    id: 0,
    name: '',
    gender: '',
    contactPreference: 1,
    dateOBirth: new Date(),
    department: '',
    isActive: true  
  }

  Title: string = "Create Employee";  
    
  colorTheme = 'theme-dark-blue';
  bsConfig?: Partial<BsDatepickerConfig>;

  previewPhoto: boolean = false;
  previewPhotoBtnTitle: string = "Show Preview"


  departments: Department[] = [
    { id: 1, Name: "Help Desk" },
    { id: 2, Name: "RH" },
    { id: 3, Name: "IT" },
    { id: 4, Name: "Logistic" },
  ]
  constructor() {

    this.bsConfig = Object.assign({},
      {
        containerClass: this.colorTheme,
        showWeekNumbers: true,
        showTodayButton: true,
        maxDate: new Date(),
        dateInputFormat: 'DD/MM/YYYY'


      });
  }

  ChangePreviewPhotoValue(): void {

    this.previewPhoto = !this.previewPhoto;

    if (this.previewPhoto) {
      this.previewPhotoBtnTitle = "Hide Preview"
    } else {
      this.previewPhotoBtnTitle = "Show Preview"
    }
  }

  ngOnInit(): void {
  }


  CreateEmployee(model: NgForm): void {
    console.log("data:form.value", model.value);
    console.log("data: employee", this.employee);
  }
}

import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/models/Department/Department.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  Title: string = "Create Employee";
  Name: string = "";
  Email: string = "";
  Gender: string = "";
  phoneNumber: number;
  contactPreference: string = "PhoneNumber";
  IsActive: boolean = true;
  Department: number = 1;
  DeteOfBirh: Date;

  colorTheme = 'theme-dark-blue';
  bsConfig?: Partial<BsDatepickerConfig>;



  departments: Department[] = [
    { id: 1, Name: "Help Desk" },
    { id: 2, Name: "RH" },
    { id: 3, Name: "IT" },
    { id: 4, Name: "Logistic" },
  ]
  constructor() {
    this.bsConfig = Object.assign({}, 
      {
         containerClass: this.colorTheme ,
         showWeekNumbers:true,
         showTodayButton: true,
         maxDate: new Date()
        
        }        );
  }

  ngOnInit(): void {
  }


  CreateEmployee(model: NgForm): void {
    console.log("data", model);
    console.log("value", model.value);
  }
}

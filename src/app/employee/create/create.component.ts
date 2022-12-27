import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
  contactPreference: string = "";
  constructor() { }

  ngOnInit(): void {
  }


  CreateEmployee(model: NgForm): void {
    console.log("data", model);
    console.log("value", model.value);
  }
}

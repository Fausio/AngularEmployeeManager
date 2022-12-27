import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: Employee[] = [{
    id: 1,
    name: "Fausio",
    gender: "M",
    email: "fausio@live.com",
    phoneNumber: 987654563,
    contactPreference: 987654563,
    dateOBirth: new Date('11,22,1995'),
    department: "DSI",
    isActive: true,
    photoPath: 'assets/imgs/fausio.png',
  },

  {
    id: 2,
    name: "Luis",
    gender: "M",
    email: "Luis@live.com",
    phoneNumber: 234234234,
    contactPreference: 234234234,
    dateOBirth: new Date('01,10,1980'),
    department: "Faturação",
    isActive: true,
    photoPath: 'assets/imgs/luis.png',
  }, 
  {
    id: 2,
    name: "Joana",
    gender: "M",
    email: "Joana@live.com",
    phoneNumber: 656456456,
    contactPreference: 8567567,
    dateOBirth: new Date('06,16,2021'),
    department: "RH",
    isActive: true,
    photoPath: 'assets/imgs/mary.png',
  }]

  constructor() { }

  ngOnInit(): void {
  }

}

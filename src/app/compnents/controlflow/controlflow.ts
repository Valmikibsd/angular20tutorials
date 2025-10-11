import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.html',
  styleUrl: './controlflow.css'
})
export class Controlflow {
  isactive: boolean = false;
  score: number = 75
  name: string = "Ramesh";

  citys :string[]=["Hyderabad","Chennai","Bangalore","Pune","Mumbai"];

  jsondata = [
    { "name": "Ramesh", "age": 20 },
    { "name": "Suresh", "age": 22 },
    { "name": "Mahesh", "age": 24 }
  ];
  
}

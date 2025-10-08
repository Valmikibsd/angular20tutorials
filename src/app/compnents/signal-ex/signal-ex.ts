import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal-ex',
  imports: [],
  templateUrl: './signal-ex.html',
  styleUrl: './signal-ex.css'
})
export class SignalEx {
  name :string="Ramesh";
  age :number=20;

  coursename=signal<string>("Angular");
  courseid=signal<number>(20);

  fullinfo=computed(()=>{
    return this.coursename()+" - "+this.courseid();
  });

  constructor(){
    setTimeout(()=>{
      this.coursename.set("Angular 20 with .net Core");
      this.courseid.set(25);
    },5000);

  }
}

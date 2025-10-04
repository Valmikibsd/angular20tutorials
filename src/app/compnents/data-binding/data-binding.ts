import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css'
})
export class DataBinding {
  coursename :string="Angular 20 Tutorials";
  courseid :number=20;
  maxlen :number=5;
  isdisab :boolean=true;
  type:string="radio";
  color:string="inpurcol";

  showcoursename():void{
    alert(this.coursename);
  }
  chancoursename():void{
    this.coursename=".net Core with Angular";
  }
}

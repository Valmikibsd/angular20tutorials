import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css'
})
export class AttDirective {

  div1classname=signal<string>("");

  styledisplay:string="blue";
  
  isdiv:boolean=false;


  changeClass(classname:string){
    
      this.div1classname.set(classname);
    }
  toggle(){
    this.isdiv=!this.isdiv;
  }
}
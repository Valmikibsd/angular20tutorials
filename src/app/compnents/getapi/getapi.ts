import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-getapi',
  imports: [],
  templateUrl: './getapi.html',
  styleUrl: './getapi.css'
})
export class Getapi {

  http= inject(HttpClient);
  Userlist:any[]=[];
  todolist:any[]=[];

  ngOnInit(): void {
    this.getuser();
    this.gettodos();
  }
  getuser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      console.log(res);
      this.Userlist=res;
    });
  }

  gettodos(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe((res:any)=>{
      console.log(res);
      this.todolist=res;
    })
  }


}

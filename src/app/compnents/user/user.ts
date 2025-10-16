import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-user',
  imports: [FormsModule],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User  {

  http=inject(HttpClient);
  userlist:any[]=[];
  
  useobj={
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
  }

  ngOnInit(): void {
    this.getusers();
  }

  register(){

    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.useobj)
    .subscribe({next:(res:any)=>{
      console.log(res);
      alert("Registered Successfully");
      this.getusers();
      this.clear();
    },error:(err:any)=>{
      console.log(err);
      alert("Something went wrong");
    }

    });
  }

  update(){
    this.http.put("https://api.freeprojectapi.com/api/GoalTracker/register",this.useobj)
    .subscribe({next:(res:any)=>{
      console.log(res);
      alert("Updated Successfully");
      this.getusers();

    },
    error:(err:any)=>{

      console.log(err);
      alert("Something went wrong");
    }});
  }

  getusers(){
    this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
    .subscribe((res:any)=>{
      console.log(res);
      this.userlist=res;
      console.log(this.userlist);
    });

  }

  deleteuser(userId:number){
    this.http.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?id="+userId)
    .subscribe({next:(res:any)=>{
      console.log(res);
      alert("Deleted Successfully");
      this.getusers();
    },error:(err:any)=>{
      console.log(err);
      alert("Something went wrong");
    }});
  }
  edituser(user:any){
    this.useobj=user;
  }

  clear(){
    this.useobj={
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
  }
  }
}

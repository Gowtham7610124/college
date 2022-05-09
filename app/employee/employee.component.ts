import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  inputField:any
  number:any
  mobile:any
  joined:any
  salary:any
  disable = true
  todolist = [""]
  index=0
  temp = false
  pending:boolean=false
  completed:boolean=false
  view:boolean=false
  user_name:boolean=true
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    this.temp = true
    this.todolist.push(this.inputField)
    this.todolist.push(this.number)
    this.todolist.push(this.mobile)
    this.todolist.push(this.joined)
    this.todolist.push(this.salary)
    console.log(this.todolist)
  }

  onKey(event:any){
    if(this.inputField !== ''){
      this.disable = false
    }
    else{
      this.disable = true
    }
  }
  onview(){
    this.view = this.view=true
    this.user_name=!this.user_name
  
 
}

}

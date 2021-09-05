import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/Todos';
@Component({
  selector: 'app-add-new-todo',
  templateUrl: './add-new-todo.component.html',
  styleUrls: ['./add-new-todo.component.css']
})
export class AddNewTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  
  @Output() msg_color= new EventEmitter();

  colors =['lavender','pink','white','orange','tortoise'];
  i:number =0;

  send_backcolor(){
    this.msg_color.emit(this.colors[this.i]);
    this.i=(this.i+1)%5;
    console.log("sent color");
  }

  @Output() sendTodo:EventEmitter<Todo> =new EventEmitter();


  title:string ="";
  Description:string ="";
  newTodo:Todo ={
    SNo:1,
    Title:this.title,
    Desc:this.Description
  }

  Add_a_todo(){
    const newTodo:Todo ={
      SNo:1,
      Title:this.title,
      Desc:this.Description
    }

    this.sendTodo.emit(newTodo);
    console.log("Send a todo");
    console.log(this.title);

  }

}

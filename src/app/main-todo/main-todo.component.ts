import { NONE_TYPE } from '@angular/compiler';
import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { Todo } from 'src/Todos';
@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent implements OnInit {

  


  myTodos:any=[];
  localItem:string="";
  constructor() { 
    this.localItem =localStorage.getItem("myTodos");
    if(this.localItem==null){
      this.myTodos =[];
      this.NoTodo="No Todos to display";
    }
    else{
      this.myTodos = JSON.parse(this.localItem);
    }


  }
  
  ngOnInit(): void {
  }
  back_color:any="pink";

  NoTodo:string=" ";

  AddMyTodo(N:Todo){
    console.log("rec a todo");
    if(N.Title!=""){
    this.myTodos.push(N);
    this.NoTodo="";}
    else{
      alert("Enter Some Task");
    }
    localStorage.setItem("myTodos",JSON.stringify(this.myTodos));
  }

  RemoveTodo(todo:Todo){
    console.log("Main Function of Delete a todo");
    const x=this.myTodos.indexOf(todo);
    this.myTodos.splice(x,1);
    if(this.myTodos.length==0){
      this.NoTodo ="No Todos to display";
    }
    localStorage.setItem("myTodos",JSON.stringify(this.myTodos));
  }

  value:string=null;
  StkTodo(todo:Todo){
    console.log("strike todo main");
    const x=this.myTodos.indexOf(todo);
    // this.myTodos.setAttribute("style", "decoration:strikethrough;"); 
    this.value ='line-through';
  }
}

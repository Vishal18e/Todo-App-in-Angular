import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/Todos';
@Component({
  selector: 'app-display-todo',
  templateUrl: './display-todo.component.html',
  styleUrls: ['./display-todo.component.css']
})
export class DisplayTodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('SndTodo') RecTodo:any;

  @Output() delTodo:EventEmitter<any>= new EventEmitter();

  DeleteTodo(){
    console.log("Secondary Function");
    this.delTodo.emit(this.RecTodo);
  }
  value:string =null;
  Strike(){
    console.log('Lining');
    if(this.value==null)
    this.value = 'line-through';
    else
    this.value = null;
  }

}

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lab163AngularToDoList';

  toDoList: Todo[]= [
    {task:"First thing", completed:false},
    {task:"Second thing", completed:false},
    {task:"third thing", completed:false}
  ];

  markComplete = function(item){
     if(item.completed == false)
     {
       item.completed = true;
     }
     else
     {
      item.completed = false;
     }
  };

  delete = function(item){
    this.toDoList.splice(item,1);
 };

 edit = function(item)
 {
   item.task = this.newTask;
   this.newTask = "";
 }
  addTask = function(){

    this.toDoList.push({
      task:this.newTask,
      completed:false
    });
  };



}




interface Todo {
  task: string,
  completed: boolean
};
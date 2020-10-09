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

  markComplete = function(i){
     if(this.toDoList[i].completed == false)
     {
       this.toDoList[i].completed = true;
     }
     else
     {
      this.toDoList[i].completed = false;
     }
  };

  delete = function(i){
    this.toDoList.splice(i,1);
 };
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
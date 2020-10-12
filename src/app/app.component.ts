import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lab163AngularToDoList';
  newTask :string ="";
  term:string ="";
  count:number = 0;

 toDoList: Todo[]= [
    {task:"Walk the dog", completed:false},
    {task:"Study for the test", completed:false},
    {task:"Contemplate life", completed:true},
    {task:"Finish reading the stack of books", completed:false},
    {task:"Do the house cleaning you've been putting off", completed:false},
    {task:"Sleep", completed:true}
  ];

  completeTask = function(item){
     if(item.completed == false)
     {
       item.completed = true;
     }
     else
     {
      item.completed = false;
     }
  };

removeTask = function(item){
    this.toDoList.splice(this.toDoList.indexOf(item),1);
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
allDone()
{
  
  for(let item of this.toDoList)
  {
    if(item.completed == false)
    {
      this.count++; 
    }
  }
   if(this.count > 0)
   {
     return false;
   }
   else
   {
     return true;
   }
  
}
 

}


interface Todo {
  task: string,
  completed: boolean
};

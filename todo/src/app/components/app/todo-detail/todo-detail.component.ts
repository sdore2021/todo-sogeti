import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { todos as data } from '../../tec/data';
import { Todo } from '../../tec/model/todo';
import { TodoService } from '../visualize/todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-todo-detail',
  standalone: true,
  imports: [],
  templateUrl: './todo-detail.component.html',
  styleUrl: './todo-detail.component.css'
})
export class TodoDetailComponent implements OnInit {

  todoId!: string | null; 
  todo: Todo = {
    id: 0,
    title: '',
    description: '',
    state: ''
  };

  constructor(
              private route: ActivatedRoute,
              private todoService: TodoService,
              private router: Router,
              private toastr: ToastrService) {}

  ngOnInit(): void {
   this.todoId = this.route.snapshot.paramMap.get('id');
   if(this.todoId != null){
    const id = +this.todoId;
    this.todoService.findTodo(id).subscribe(data => this.todo = data);
   }
  
  }

  goback(){
    this.router.navigateByUrl("/");
  }

  delete(){
    console.log("deleting...");
    this.todoService.deleteTodo(this.todo.id).subscribe(
      bool => {
        if(bool){
          this.toastr.success('deleted successfully', 'Todo',  {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing',
          });
          this.goback();
        } else {
          this.toastr.error('deleted failed', 'Todo',  {
            timeOut: 3000,
            progressBar: true,
            progressAnimation: 'increasing',
          });
          this.goback();
        }
      }
    )
  }


}

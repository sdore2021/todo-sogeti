import { Component } from '@angular/core';
import { TodoComponent } from '../todo/todo.component';
import { STATUS, Todo } from '../../tec/model/todo';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from './todo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-visualize',
  standalone: true,
  imports: [TodoComponent, CommonModule,NgbModule, ReactiveFormsModule],
  templateUrl: './visualize.component.html',
  styleUrl: './visualize.component.css'
})
export class VisualizeComponent implements OnInit {

  constructor(
        private router: Router,
        private modalService: NgbModal,
        private formBuilder: FormBuilder,
        private todoService: TodoService,
        private toastr: ToastrService 
        ){}
 
  /**
   * Array of todo
   */
  dataTodos: Todo[] = [];
  todos: Todo[] = [];
  todosCompleted: Todo[] = [];

  addTodoForm!: FormGroup;


  ngOnInit(): void {
    //  this.dataTodos = [...data ];
      this.getdata();
      this.initForm();
  }

  updateTask(todo: Todo){
    this.todoService.createOrUpdateTodo(todo).subscribe(
      bool => {
        if(bool){
          console.log("succed!");
          this.getdata();
        } else {
          console.log("error");
        }
      }
    )

  }

  getdata(){
   
    // let data: Todo[];
    this.todoService.getTodos().subscribe(
      (todos: Todo[]) => {
       const data = [...todos];
        this.todos = data.filter(todo => todo.state != STATUS.COMPLETED);
        this.todos.sort((a,b) => (a.id > b.id ? -1 : 1)); // print new task on top
        this.todosCompleted = data.filter(todo => todo.state == STATUS.COMPLETED);
      }
      );
  }

  // modal code
  //function to open modal
openModalFunction(content:any){
  this.modalService.open(content);
  }
  
  //function to close modal
  closeModalFunction(){
    this.addTodoForm.reset();
    this.modalService.dismissAll();
  }

  // submit button
  addNewTodo(){

    if(this.addTodoForm.invalid) {
      this.toastr.error('title can not be empty', 'Todo',  {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
      });
      console.log("form invalid");
      return;
    }

    const title = this.addTodoForm.get('title')?.value;
    const description = this.addTodoForm.get('description')?.value;
    const newTodo: Todo = {
       id: 0,
      title: title,
      description: description,
      state: STATUS.NEW_TASK
    }

    this.updateTask(newTodo);
    this.toastr.success('Todo', 'created todo successfully!', {
      timeOut: 3000,
      progressBar: true,
      progressAnimation: 'increasing',
    });
    this.closeModalFunction();
  }

  initForm(){
    this.addTodoForm = this.formBuilder.group({
      title : ['', Validators.required],
      description: [''],
    });
  }

}

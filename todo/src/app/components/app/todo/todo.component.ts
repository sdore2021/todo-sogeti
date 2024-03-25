import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo, STATUS } from '../../tec/model/todo';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
 

  @Input()
  todo!: Todo;
  @Output()
  statetodoChange = new EventEmitter<Todo>();

  status: string = "";
  NEW_TASK = STATUS.NEW_TASK;
  IN_PRORESS=STATUS.IN_PRORESS;
  COMPLETED=STATUS.COMPLETED

  constructor(private router: Router){}

  ngOnInit(): void {
    this.status = this.todo.state;
  }

  newTacheCheck(){
     if(this.status === STATUS.NEW_TASK) return true;
     return false;
  }

  inProgessCheck(){
    if(this.status === STATUS.IN_PRORESS) return true;
    return false;
 }

 completedCheck(){
  if(this.status === STATUS.COMPLETED) return true;
  return false;
}


  onChange(e: Event) {
    this.status = (e.target as HTMLInputElement).value;
    this.todo.state = this.status;
  }

  updateTask(todo: Todo){
    this.statetodoChange.emit(this.todo);
  }

  showDetail(todo:Todo){
      const url: string = "/todo/" + todo.id;
      this.router.navigateByUrl(url);
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Todo } from "../../tec/model/todo";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    private url = "http://localhost:8080/";

    constructor(private http: HttpClient){}

    getTodos(): Observable<Todo[]>{
        return this.http.get<Todo[]>(this.url);
    }

    createOrUpdateTodo(todo: Todo): Observable<boolean>{
        return this.http.post<boolean>(this.url, todo);
    }

    findTodo(id: number): Observable<Todo>{
        return this.http.get<Todo>(this.url + id);
    }

    deleteTodo(id: number){
        return this.http.delete<boolean>(this.url + id);
    }

}
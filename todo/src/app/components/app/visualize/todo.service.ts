import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Todo } from "../../tec/model/todo";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";


@Injectable({
    providedIn: 'root'
})
export class TodoService {
   
    private url = environment.apiUrl;

    constructor(private http: HttpClient){}

    getHostname(): Observable<string> {
        return this.http.get(this.url + "/pod", { responseType: 'text' });
        }


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
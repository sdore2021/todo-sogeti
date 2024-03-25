package com.sam.dotobackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sam.dotobackend.model.Todo;
import com.sam.dotobackend.service.TodoService;


@RequestMapping("/")
@RestController
public class TodoController {


    @Autowired
    TodoService todoService;

    @CrossOrigin("*")
    @GetMapping
    public List<Todo> getTodos(){
        return todoService.getTodos();
    }

    
    @CrossOrigin("*")
    @GetMapping("/{id}")
    public Todo getTodoById(@PathVariable("id") Integer id){
        return todoService.getTodoById(id);
    }


    @CrossOrigin("*")
    @PostMapping
    private boolean createOrUpdateTodo(@RequestBody Todo todo) {
        try {
            todoService.saveOrUpdate(todo);
        } catch (Exception exception) {
            return false;
        }
        return true;
    }


    @CrossOrigin("*")
    @DeleteMapping("{id}")
    private boolean deleteById(@PathVariable("id") int id) {
        try {
            todoService.delete(id);
        } catch (Exception exception) {
            return false;
        }
        return true;
    }
    
    
}

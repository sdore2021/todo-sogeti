package com.sam.dotobackend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sam.dotobackend.model.Todo;
import com.sam.dotobackend.repository.TodoRepository;

@Service
public class TodoService {

    @Autowired
    TodoRepository todoRepository;

    public List<Todo> getTodos(){
        return todoRepository.findAll();
    }

    public Todo getTodoById(Integer id){
        return todoRepository.findById(id).get();
    }

    public void saveOrUpdate(Todo todo){
        todoRepository.save(todo);
    }

    public void delete(Integer id) {
        todoRepository.deleteById(id);
    }
    
}

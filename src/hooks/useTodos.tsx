import { useState, useEffect } from "react";
import { TodoProps } from "../types";

const useTodos = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);


  useEffect(() => {
    const savedTodos = localStorage.getItem("dayForge_Todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  

  const addTodo = (todo: TodoProps) => {
    setTodos([...todos, todo]);

    localStorage.setItem("dayForge_Todos", JSON.stringify(todos));
  }


  const deleteTodo = (ids: number[]) => {
    setTodos(prevTodos => prevTodos.filter(todo => !ids.includes(todo.id)));
    
    localStorage.setItem("dayForge_Todos", JSON.stringify(todos));
  }

  
  return { todos, setTodos, addTodo, deleteTodo };
}

export default useTodos;
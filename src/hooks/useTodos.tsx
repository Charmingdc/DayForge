import { useState, useEffect } from "react";
import { TodoProps } from "../types";

const useTodos = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);


  useEffect(() => {
    const savedTodos = localStorage.getItem("dayForge_Todos");

    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, [todos]);

  

  const addTodo = (todo: TodoProps) => {
    setTodos([...todos, todo]);

    localStorage.setItem("dayForge_Todos", JSON.stringify(todos));
  }


  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i != index);
    setTodos(newTodos);

    localStorage.setItem("dayForge_Todos", JSON.stringify(todos));
  }

  
  return { todos, addTodo, deleteTodo };
}

export default useTodos;